import HierarchyNodeDatum from "../../commons/d3/hierarchy-node-datum";
import treeNodeProxy from "./tree-node-proxy";

export default <T>(t: T, snapshots: HierarchyNodeDatum<T>[]) => {
    return treeNodeProxy(t, snapshots);
}
