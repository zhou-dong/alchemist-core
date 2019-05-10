import treeNodeProxy from "./tree-node-proxy";
import Actions from "../../commons/actions";

export default <T>(t: T, parentId: string, actions: Actions) => {
    return treeNodeProxy(t, actions, parentId);
}
