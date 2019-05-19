import HierarchyNodeDatum from "../../commons/d3/tree/binary-tree-node-datum";
import treeNodeProxy from "./tree-node-proxy";
import Actions from "../../commons/actions";
import TreeNode from "./tree-node";

export default <T>(
    val: T,
    snapshots: HierarchyNodeDatum[],
    actions: Actions,
    parent: HTMLElement
): TreeNode<T> => {
    return treeNodeProxy(val, snapshots, actions, parent);
}
