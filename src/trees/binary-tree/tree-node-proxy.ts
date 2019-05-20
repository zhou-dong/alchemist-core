import HierarchyNodeDatum, { DummyNode, DummyNodeName } from "../../commons/d3/tree/binary-tree-node-datum";
import TreeNode from "./tree-node";
import Action from "../../commons/d3/tree/action";
import Actions from "../../commons/actions";

const [val, left, right] = ["val", "left", "right"];

// Maybe I should find a way to optimize it
const clearClasses = (root: HierarchyNodeDatum) => {
    if (root instanceof DummyNode || root.name === DummyNodeName) {
        return;
    }

    root.classes = [];
    root.children.forEach(clearClasses);
};

// Maybe I should find a way to optimize it
// If want to use: JSON.parse(JSON.stringify(snapshots[snapshots.length - 1]))
// then HashTable will not works.
const getTarget = (root: HierarchyNodeDatum, targetId: string): HierarchyNodeDatum | undefined => {
    if (root.id === targetId) {
        return root;
    }

    for (let i = 0; i < root.children.length; i++) {
        const target = getTarget(root.children[i], targetId);
        if (target) {
            return target;
        }
    }

    return undefined;
};

const addSnapshot = <T>(
    treeNode: TreeNode<T>,
    snapshots: HierarchyNodeDatum[],
    actions: Actions,
    parent: HTMLElement,
    callback: (clonedHierarchyNodeDatum: HierarchyNodeDatum) => any
) => {
    const clonedRoot: HierarchyNodeDatum = JSON.parse(JSON.stringify(snapshots[snapshots.length - 1]));
    clearClasses(clonedRoot);
    const clonedNode = getTarget(clonedRoot, treeNode.hierarchyNodeDatum.id);
    if (clonedNode) {
        callback(clonedNode);
    }
    snapshots.push(clonedRoot);
    actions.add(new Action(clonedRoot, parent));
};

const proxyHandler = <T>(
    snapshots: HierarchyNodeDatum[],
    actions: Actions,
    parent: HTMLElement
): ProxyHandler<TreeNode<T>> => ({
    get: function (target, propertyKey, receiver) {
        switch (propertyKey) {
            case val: {
                addSnapshot(target, snapshots, actions, parent, cloned => {
                    cloned.classes.push("target");
                });
                break;
            }
            case left: {
                addSnapshot(target, snapshots, actions, parent, cloned => {
                    cloned.classes.push("target");
                });
                break;
            }
            case right: {
                addSnapshot(target, snapshots, actions, parent, cloned => {
                    cloned.classes.push("target");
                });
                break;
            }
        }
        return Reflect.get(target, propertyKey, receiver);
    },
    set: function (target, propertyKey, value, receiver) {
        switch (propertyKey) {
            case val: {
                addSnapshot(target, snapshots, actions, parent, cloned => {
                    cloned.name = value;
                    cloned.classes.push("target");
                });
                break;
            }
            case left: {
                addSnapshot(target, snapshots, actions, parent, cloned => {
                    const treeNode: TreeNode<T> = (value as any);
                    cloned.classes.push("target");
                    treeNode.hierarchyNodeDatum.classes.push("new-added");
                    cloned.children[0] = treeNode.hierarchyNodeDatum;
                });
                break;
            }
            case right: {
                addSnapshot(target, snapshots, actions, parent, cloned => {
                    const treeNode: TreeNode<T> = (value as any);
                    cloned.classes.push("target");
                    treeNode.hierarchyNodeDatum.classes.push("new-added");
                    cloned.children[1] = treeNode.hierarchyNodeDatum;
                });
                break;
            }
        }
        return Reflect.set(target, propertyKey, value, receiver);
    },
    deleteProperty: function (target, propertyKey) {
        switch (propertyKey) {
            case left: {
                addSnapshot(target, snapshots, actions, parent, cloned => {
                    if (cloned.children) {
                        delete cloned.children[0];
                    }
                });
                break;
            }
            case right: {
                addSnapshot(target, snapshots, actions, parent, cloned => {
                    if (cloned.children) {
                        delete cloned.children[1];
                    }
                });
                break;
            }
        }
        return Reflect.deleteProperty(target, propertyKey);
    }
});

export default <T>(val: T, snapshots: HierarchyNodeDatum[], actions: Actions, parent: HTMLElement): TreeNode<T> => {
    const treeNode = new TreeNode(val);
    if (snapshots.length === 0) {
        treeNode.hierarchyNodeDatum.classes.push("new-added");
        snapshots.push(treeNode.hierarchyNodeDatum);
        actions.add(new Action(treeNode.hierarchyNodeDatum, parent));
    }
    return new Proxy(treeNode, proxyHandler(snapshots, actions, parent));
}
