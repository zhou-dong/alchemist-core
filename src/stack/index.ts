import Stack, { IStack, PushAction, PeekAction, PopAction, SizeAction, IsEmptyAction } from "./stack";
import HTMLStack from "./htmlStack";
import AnimatorActions from "../core/animatorActions";
import { AnimatorInterval } from "../core/animatorInterval";

export default class <T> extends AnimatorInterval<T> implements IStack<T> {
    private stack: Stack<T>;
    private htmlStack: HTMLStack<T>;
    private actions: AnimatorActions<T>;

    constructor(parent: HTMLElement, actions?: AnimatorActions<T>) {
        if (actions) {
            super(actions);
            this.actions = actions;
        } else {
            const newActions = new AnimatorActions<T>();
            super(newActions);
            this.actions = newActions;
        }
        this.stack = new Stack();
        this.htmlStack = new HTMLStack(parent);
    }

    push(payload: T): void {
        this.actions.add(new PushAction(this.htmlStack, payload));
        this.stack.push(payload);
    }

    peek(): T {
        this.actions.add(new PeekAction(this.htmlStack));
        return this.stack.peek();
    }

    pop(): T | undefined {
        this.actions.add(new PopAction(this.htmlStack));
        return this.stack.pop();
    }

    size() {
        this.actions.add(new SizeAction(this.htmlStack));
        return this.stack.size();
    }

    isEmpty() {
        this.actions.add(new IsEmptyAction(this.htmlStack));
        return this.stack.isEmpty();
    }
}
