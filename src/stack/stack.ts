import Action from "../commons/action";

export interface IStack<T> {
    push(payload: T): void;
    peek(): T | undefined;
    pop(): T | undefined;
    size(): number;
    isEmpty(): boolean;
}

export default class <T> implements IStack<T> {
    private readonly array: T[];

    constructor() {
        this.array = [];
    }

    push(item: T): void {
        this.array.push(item);
    }

    peek(): T {
        return this.array[this.array.length - 1];
    }

    pop(): T | undefined {
        return this.array.pop();
    }

    size(): number {
        return this.array.length;
    }

    isEmpty(): boolean {
        return this.array.length === 0;
    }
}

abstract class StackAction<T> implements Action {
    abstract animate(): any
    protected readonly stack: IStack<T>;

    constructor(stack: IStack<T>) {
        this.stack = stack;
    }
}

export class PushAction<T> extends StackAction<T> {
    private readonly payload: T;

    constructor(stack: IStack<T>, payload: T) {
        super(stack)
        this.payload = payload;
    }

    animate() {
        this.stack.push(this.payload);
    }
}

export class PeekAction<T> extends StackAction<T> {
    constructor(stack: IStack<T>) {
        super(stack)
    }

    animate() {
        this.stack.peek();
    }
}

export class PopAction<T> extends StackAction<T> {
    constructor(stack: IStack<T>) {
        super(stack)
    }

    animate() {
        this.stack.pop();
    }
}

export class SizeAction<T> extends StackAction<T> {
    constructor(stack: IStack<T>) {
        super(stack)
    }

    animate() {
        this.stack.size();
    }
}

export class IsEmptyAction<T> extends StackAction<T> {
    constructor(stack: IStack<T>) {
        super(stack)
    }

    animate() {
        this.stack.isEmpty();
    }
}
