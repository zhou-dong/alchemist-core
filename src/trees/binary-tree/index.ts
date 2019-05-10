import treeNodeProxy from "./tree-node-proxy";
import Actions from "../../commons/actions";
import { ITreeNode } from "./tree-node";

export default <T>(val: T, parentId: string, actions: Actions): ITreeNode<T> => {
    return treeNodeProxy(val, actions, parentId);
}
