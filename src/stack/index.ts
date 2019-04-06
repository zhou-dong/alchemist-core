import Stack, { IStack, PushAction, PeekAction, PopAction, SizeAction, IsEmptyAction } from "./stack";
import HTMLStack from "./htmlStack";
import Action from "../commons/action";
import Actions from "../commons/actions";

export default class <T> extends Actions implements IStack<T> {
    private stack: Stack<T>;
    private htmlStack: HTMLStack<T>;

    constructor(parent: HTMLElement, actions?: Action[], id?: string) {
        super(actions);
        this.stack = new Stack();
        this.htmlStack = new HTMLStack(parent, id);
    }

    push(payload: T): void {
        this.add(new PushAction(this.htmlStack, payload));
        this.stack.push(payload);
    }

    peek(): T {
        this.add(new PeekAction(this.htmlStack));
        return this.stack.peek();
    }

    pop(): T | undefined {
        this.add(new PopAction(this.htmlStack));
        return this.stack.pop();
    }

    size() {
        this.add(new SizeAction(this.htmlStack));
        return this.stack.size();
    }

    isEmpty() {
        this.add(new IsEmptyAction(this.htmlStack));
        return this.stack.isEmpty();
    }
}
