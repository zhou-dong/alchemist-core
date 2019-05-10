import Action from "../../action";
import HierarchyNodeDatum from "../hierarchy-node-datum";
import render from "./render";

export default class <T> implements Action {

    private readonly data: HierarchyNodeDatum<T>;
    private readonly parentId: string;

    constructor(data: HierarchyNodeDatum<T>, parentId: string) {
        this.data = data;
        this.parentId = parentId;
    }

    animate() {
        render(this.data, this.parentId);
    }
}
