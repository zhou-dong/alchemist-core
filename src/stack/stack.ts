import AnimatorAction from "../core/animatorAction";

export interface IStack<P> {
    push(payload: P): any;
    peek(): any;
    pop(): any;
    size(): any;
    isEmpty(): any;
}

export interface StackAction<P> extends AnimatorAction<P> {
    animate(): any
    readonly payload?: P;
    readonly stack: IStack<P>;
}

export class PushAction<P> implements StackAction<P> {
    payload: P;
    stack: IStack<P>;

    constructor(stack: IStack<P>, payload: P) {
        this.stack = stack;
        this.payload = payload;
    }

    animate() {
        this.stack.push(this.payload);
    }
}

export class PeekAction<P> implements StackAction<P> {
    stack: IStack<P>;

    constructor(stack: IStack<P>) {
        this.stack = stack;
    }

    animate() {
        this.stack.peek();
    }
}

export class PopAction<P> implements StackAction<P> {
    stack: IStack<P>;

    constructor(stack: IStack<P>) {
        this.stack = stack;
    }

    animate() {
        this.stack.pop();
    }
}

export class SizeAction<P> implements StackAction<P> {
    stack: IStack<P>;

    constructor(stack: IStack<P>) {
        this.stack = stack;
    }

    animate() {
        this.stack.size();
    }
}

export class IsEmptyAction<P> implements StackAction<P> {
    stack: IStack<P>;

    constructor(stack: IStack<P>) {
        this.stack = stack;
    }

    animate() {
        this.stack.isEmpty();
    }
}

export default class <P> implements IStack<P> {
    private array: P[];

    constructor() {
        this.array = [];
    }

    push(item: P): void {
        this.array.push(item);
    }

    peek(): P {
        return this.array[this.array.length - 1];
    }

    pop(): P | undefined {
        return this.array.pop();
    }

    size(): number {
        return this.array.length;
    }

    isEmpty(): boolean {
        return this.array.length === 0;
    }
}
