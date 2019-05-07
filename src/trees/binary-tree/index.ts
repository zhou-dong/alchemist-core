import HierarchyNodeDatum from "../../commons/d3/hierarchy-node-datum";
import treeNodeProxy from "./tree-node-proxy";
import TreeNode from "./tree-node";

export default <T>(t: T) => {
    const rootData: HierarchyNodeDatum<T> = {}
    const rootTreeNode: TreeNode<T> = { val: t };
    return treeNodeProxy(rootTreeNode, rootData);
}
