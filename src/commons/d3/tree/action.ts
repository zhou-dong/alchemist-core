import Action from "../../action";
import HierarchyNodeDatum from "../hierarchy-node-datum";
import render from "./render";

export default class <T> implements Action {
    private readonly data: HierarchyNodeDatum<T>;
    private readonly parent: HTMLElement;

    constructor(data: HierarchyNodeDatum<T>, parent: HTMLElement) {
        this.data = data;
        this.parent = parent;
    }

    animate() {
        render(this.data, this.parent);
    }
}
