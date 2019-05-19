import HierarchyNodeDatum from "../../commons/d3/tree/binary-tree-node-datum";

interface ITreeNode<T> {
    val: T;
    left?: this;
    right?: this;
}

class TreeNode<T extends any> implements ITreeNode<T> {
    val: T;
    left?: this;
    right?: this;
    hierarchyNodeDatum: HierarchyNodeDatum;

    constructor(val: T) {
        this.val = val;
        this.hierarchyNodeDatum = new HierarchyNodeDatum(val.toString());
    }
}

export default TreeNode;
