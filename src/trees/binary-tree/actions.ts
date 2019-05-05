import Action from "../../commons/action";
import { INode } from ".";

abstract class AbstractClass implements Action {
    abstract animate(): any
    protected readonly node: INode;

    constructor(treeNode: INode) {
        this.node = treeNode;
    }
}

export class GetAction extends AbstractClass {
    constructor(treeNode: INode) {
        super(treeNode);
    }

    animate() {
        this.node.val;
    }
}

export class GetLeftAction extends AbstractClass {
    constructor(treeNode: INode) {
        super(treeNode);
    }

    animate() {
        this.node.left;
    }
}

export class DeleteLeftAction extends AbstractClass {
    constructor(treeNode: INode) {
        super(treeNode);
    }

    animate() {
        // this.node.left = this.val;
    }
}

export class SetLeftAction extends AbstractClass {
    private readonly val: any;

    constructor(treeNode: INode, val: any) {
        super(treeNode);
        this.val = val;
    }

    animate() {
        this.node.left = this.val;
    }
}

export class GetRightAction extends AbstractClass {
    constructor(treeNode: INode) {
        super(treeNode);
    }

    animate() {
        this.node.right;
    }
}

export class SetRightAction extends AbstractClass {
    private readonly val: any;

    constructor(treeNode: INode, val: any) {
        super(treeNode);
        this.val = val;
    }

    animate() {
        this.node.right = this.val;
    }
}

export class DeleteRightAction extends AbstractClass {
    constructor(treeNode: INode) {
        super(treeNode);
    }

    animate() {
        // this.node.right = this.val;
    }
}
