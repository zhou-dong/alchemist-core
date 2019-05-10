import HierarchyNodeDatum from "../../commons/d3/hierarchy-node-datum";

export interface ITreeNode<T> {
    val: T;
    left?: this;
    right?: this;
}

export default class <T> implements ITreeNode<T> {
    val: T;
    left?: this;
    right?: this;
    hierarchyNodeDatum: HierarchyNodeDatum<T>;

    constructor(val: T) {
        this.val = val;
        this.hierarchyNodeDatum = { name: val }
    }
}
