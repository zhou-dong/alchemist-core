import TreeNode from "./tree-node";
import HierarchyNodeDatum from "../../commons/d3/hierarchy-node-datum";

const val = "val";
const left = "left";
const right = "right";

export const createHandler = <T>(hierarchyNodeDatum: HierarchyNodeDatum<T>): ProxyHandler<TreeNode<T>> => ({
    get: function (target, propertyKey, receiver) {
        switch (propertyKey) {
            case val: {
                // TODO
                break;
            }
            case left: {
                // TODO
                break;
            }
            case right: {
                // TODO
                break;
            }
        }

        return Reflect.get(target, propertyKey, receiver);
    },
    set: function (target, propertyKey, value, receiver) {
        switch (propertyKey) {
            case val: {
                hierarchyNodeDatum.name = value;
                break;
            }
            case left: {
                if (!hierarchyNodeDatum.children) {
                    hierarchyNodeDatum.children = [];
                }
                hierarchyNodeDatum.children[0] = value;
                break;
            }
            case right: {
                if (!hierarchyNodeDatum.children) {
                    hierarchyNodeDatum.children = [];
                }
                hierarchyNodeDatum.children[1] = value;
                break;
            }
        }
        return Reflect.set(target, propertyKey, value, receiver);
    },
    deleteProperty: function (target, propertyKey) {
        switch (propertyKey) {
            case val: {
                delete hierarchyNodeDatum["name"]
                break;
            }
            case left: {
                if (hierarchyNodeDatum.children) {
                    delete hierarchyNodeDatum.children[0];
                }
                break;
            }
            case right: {
                if (hierarchyNodeDatum.children) {
                    delete hierarchyNodeDatum.children[1];
                }
                break;
            }
        }
        return Reflect.deleteProperty(target, propertyKey);
    }
});

export default <T>(treeNode: TreeNode<T>, hierarchyNodeDatum: HierarchyNodeDatum<T>) => {
    return new Proxy(treeNode, createHandler<T>(hierarchyNodeDatum));
}
