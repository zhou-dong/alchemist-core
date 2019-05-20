import HierarchyNodeDatum from "../hierarchy-node-datum";

export const DummyNodeName = "dummy";

export class DummyNode extends HierarchyNodeDatum<string>{
    constructor() {
        super(DummyNodeName);
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
