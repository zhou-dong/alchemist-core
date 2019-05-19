import HierarchyNodeDatum from "../hierarchy-node-datum";

export class DummyNode extends HierarchyNodeDatum<string>{
    constructor() {
        super("dummy")
        this.classes.push("dummy-node");
        this.classes.push("hidden");
    }
}

export default class extends HierarchyNodeDatum<string> {
    constructor(name?: string) {
        super(name);
        this.children.push(new DummyNode());
        this.children.push(new DummyNode());
    }
}
