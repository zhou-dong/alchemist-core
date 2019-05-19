import { v4 } from "uuid";

interface ID3HierarchyNodeDatum {
    children: Array<ID3HierarchyNodeDatum>;
}

interface IHierarchyNodeDatum<T> extends ID3HierarchyNodeDatum {
    id: string;
    name?: T;
    classes: string[];
}

export default class HierarchyNodeDatum<T> implements IHierarchyNodeDatum<T> {
    readonly id: string;
    name?: T;
    children: Array<HierarchyNodeDatum<T>>;
    classes: string[];

    constructor(name?: T) {
        this.id = v4();
        this.name = name;
        this.children = [];
        this.classes = [];
    }
}
