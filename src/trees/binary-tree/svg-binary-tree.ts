import { INode } from ".";
const svgNamespaceURI = "http://www.w3.org/2000/svg";

export default class SVGBinaryTreeNode implements INode {
    private readonly svg: SVGSVGElement;
    private readonly text: SVGTextElement;
    readonly circle: SVGCircleElement;

    private _left!: SVGBinaryTreeNode;
    private _right!: SVGBinaryTreeNode;
    private _val: any;

    constructor(svg: SVGSVGElement, val: any) {
        this.val = val;
        this.svg = svg;
        this.circle = document.createElementNS(svgNamespaceURI, "circle");

        this.circle.setAttribute("fill", "yellow");
        this.circle.setAttribute("stroke", "green");
        this.circle.setAttribute("stroke-width", "1");

        const text: SVGTextElement = document.createElementNS(svgNamespaceURI, "text");
        text.textContent = val;
        text.setAttribute("fill", "#000");
        this.text = text;

        this.svg.appendChild(this.circle);
        this.svg.appendChild(text);
    }

    get val() {
        return this._val;
    }

    set val(val: any) {
        this._val = val;
    }

    get cx(): number {
        return +(this.circle.getAttribute("cx") as string);
    }

    set cx(cx: number) {
        this.circle.setAttribute("cx", cx.toString());
        this.text.setAttribute("x", (cx + this.r).toString());
    }

    get cy(): number {
        return +(this.circle.getAttribute("cy") as string);
    }

    set cy(cy: number) {
        this.circle.setAttribute("cy", cy.toString());
        this.text.setAttribute("y", cy.toString());
    }

    get r(): number {
        return +(this.circle.getAttribute("r") as string);
    }

    set r(r: number) {
        this.circle.setAttribute("r", r.toString());
    }

    get bottom() {
        return { x: this.cx, y: this.cy + this.r };
    }

    get upLeft() {
        const x = this.cx - this.r * Math.cos(Math.PI / 4);
        const y = this.cy - this.r * Math.sin(Math.PI / 4);
        return { x, y };
    }

    get downLeft() {
        const x = this.cx - this.r * Math.cos(Math.PI / 4);
        const y = this.cy + this.r * Math.sin(Math.PI / 4);
        return { x, y };
    }

    get upRight() {
        const x = this.cx + this.r * Math.cos(Math.PI / 4);
        const y = this.cy - this.r * Math.sin(Math.PI / 4);
        return { x, y };
    }

    get downRight() {
        const x = this.cx + this.r * Math.cos(Math.PI / 4);
        const y = this.cy + this.r * Math.sin(Math.PI / 4);
        return { x, y };
    }

    set left(value: any) {
        this._left = new SVGBinaryTreeNode(this.svg, value);
        this._left.r = this.r;
        this._left.cx = this.cx - 2 * 2 * this.r;
        this._left.cy = this.cy + 2.5 * 2 * this.r;

        const downLeft = this.downLeft;
        const upRight = this._left.upRight;
        this.connect(downLeft.x, downLeft.y, upRight.x + 2, upRight.y - 3)
    }

    get left() {
        return this._left;
    }

    set right(value: any) {
        this._right = new SVGBinaryTreeNode(this.svg, value);
        this._right.r = this.r;
        this._right.cx = this.cx + 2 * 2 * this.r;
        this._right.cy = this.cy + 2.5 * 2 * this.r;

        const downRight = this.downRight;
        const upLeft = this._right.upLeft;
        this.connect(downRight.x, downRight.y, upLeft.x - 2, upLeft.y - 3);
    }

    get right() {
        return this._right;
    }

    private connect(x1: number, y1: number, x2: number, y2: number) {
        const line: SVGLineElement = document.createElementNS(svgNamespaceURI, "line");
        line.setAttribute("x1", x1.toString());
        line.setAttribute("y1", y1.toString());
        line.setAttribute("x2", x2.toString());
        line.setAttribute("y2", y2.toString());
        line.setAttribute("stroke", "green")
        line.setAttribute("stroke-width", "1");
        line.setAttribute("marker-end", "url(#arrow)");
        this.svg.appendChild(line);
    }
}