import Action from "../../commons/action";
import Actions from "../../commons/actions";
import { GetAction, GetLeftAction, GetRightAction, SetLeftAction, SetRightAction, DeleteLeftAction, DeleteRightAction } from "./actions";
import SVGNode from "./svg-binary-tree";
import svg from "..";

export interface INode {
    val: any;
    left: INode;
    right: INode;
}

export default class Node extends Actions implements INode {
    private _val: any;
    private _left!: Node;
    private _right!: Node;

    private svgNode: SVGNode;

    constructor(val: any) {
        const forwardActions: Action[] = [];
        const backwardActions: Action[] = [];
        super(forwardActions, backwardActions);
        this.val = val;
        this.svgNode = new SVGNode(svg, val);
    }

    get val() {
        this.addAction(new GetAction(this.svgNode), new GetAction(this.svgNode));
        return this._val;
    }

    set val(val: any) {
        this._val = val;
    }

    get left() {
        this.addAction(new GetLeftAction(this.svgNode), new GetLeftAction(this.svgNode));
        return this._left;
    }

    set left(node: Node) {
        this.addAction(new SetLeftAction(this.svgNode, node._val), new DeleteLeftAction(this.svgNode));
        this._left = node;
    }

    get right() {
        this.addAction(new GetRightAction(this.svgNode), new GetRightAction(this.svgNode));
        return this._right;
    }

    set right(node: Node) {
        this.addAction(new SetRightAction(this.svgNode, node._val), new DeleteRightAction(this.svgNode));
        this._right = node;
    }
}
