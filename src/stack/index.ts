import Stack, { IStack, PushAction, PeekAction, PopAction, SizeAction, IsEmptyAction } from "./stack";
import Action from "../commons/action";
import Actions from "../commons/actions";
import DynamicSizeStack from "./html/dynamicSizeStack";
import FixedSizeStack from "./html/fixedSizeStack";

export default class <T> extends Actions implements IStack<T> {
    private readonly stack: IStack<T>;
    private readonly htmlStack: IStack<T>;

    constructor(
        parent: HTMLElement,
        size?: number,
        id?: string,
        forwardActions?: Action[],
        backwardActions?: Action[]
    ) {
        super(forwardActions, backwardActions)
        this.stack = new Stack();
        this.htmlStack = size ? new FixedSizeStack(parent, size, id) : new DynamicSizeStack(parent, id);
    }

    push(payload: T): void {
        this.addAction(new PushAction(this.htmlStack, payload), new PopAction(this.htmlStack));
        this.stack.push(payload);
    }

    peek(): T {
        this.addAction(new PeekAction(this.htmlStack), new PeekAction(this.htmlStack));
        return this.stack.peek();
    }

    pop(): T {
        this.addAction(new PopAction(this.htmlStack), new PushAction(this.htmlStack, this.stack.peek()));
        return this.stack.pop();
    }

    size(): number {
        this.addAction(new SizeAction(this.htmlStack), new SizeAction(this.htmlStack));
        return this.stack.size();
    }

    isEmpty() {
        this.addAction(new IsEmptyAction(this.htmlStack), new IsEmptyAction(this.htmlStack));
        return this.stack.isEmpty();
    }
}
