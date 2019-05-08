import HierarchyNodeDatum from "../../commons/d3/hierarchy-node-datum";
import TreeNode from "./tree-node";

const [val, left, right] = ["val", "left", "right"];

const cloneNodeDatum = <T>(hierarchyNodeDatum: HierarchyNodeDatum<T>): HierarchyNodeDatum<T> => {
    const { name, children } = hierarchyNodeDatum;
    if (children) {
        return { name, children: children.slice(0) };
    } else {
        return { name };
    }
};

const addSnapshot = <T>(
    treeNode: TreeNode<T>,
    snapshots: HierarchyNodeDatum<T>[],
    callback: (clonedHierarchyNodeDatum: HierarchyNodeDatum<T>) => any
) => {
    const cloned = cloneNodeDatum(treeNode.hierarchyNodeDatum);
    callback(cloned);
    snapshots.push(cloned);
};

const proxyHandler = <T>(snapshots: HierarchyNodeDatum<T>[]): ProxyHandler<TreeNode<T>> => ({
    get: function (target, propertyKey, receiver) {
        switch (propertyKey) {
            case val: {
                addSnapshot(target, snapshots, cloned => {
                    // TODO
                });
                break;
            }
            case left: {
                addSnapshot(target, snapshots, cloned => {
                    // TODO
                });
                break;
            }
            case right: {
                addSnapshot(target, snapshots, cloned => {
                    // TODO
                });
                break;
            }
        }
        return Reflect.get(target, propertyKey, receiver);
    },
    set: function (target, propertyKey, value, receiver) {
        switch (propertyKey) {
            case val: {
                addSnapshot(target, snapshots, cloned => cloned.name = value);
                break;
            }
            case left: {
                addSnapshot(target, snapshots, cloned => {
                    if (!cloned.children)
                        cloned.children = [];
                    cloned.children[0] = value;
                });
                break;
            }
            case right: {
                addSnapshot(target, snapshots, cloned => {
                    if (!cloned.children)
                        cloned.children = [];
                    cloned.children[1] = value;
                });
                break;
            }
        }
        return Reflect.set(target, propertyKey, value, receiver);
    },
    deleteProperty: function (target, propertyKey) {
        switch (propertyKey) {
            case left: {
                addSnapshot(target, snapshots, cloned => {
                    if (cloned.children) {
                        delete cloned.children[0];
                    }
                });
                break;
            }
            case right: {
                addSnapshot(target, snapshots, cloned => {
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

export default <T>(val: T, snapshots: HierarchyNodeDatum<T>[]) => {
    return new Proxy(new TreeNode(val), proxyHandler(snapshots));
}
