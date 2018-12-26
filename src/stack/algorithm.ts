import IStack from "./stack";

export class Stack<T> implements IStack<T> {

    private array: T[];

    constructor() {
        this.array = [];
    }

    peek(): T {
        return this.array[this.array.length - 1];
    }

    push(t: T): void {
        this.array.push(t);
    }

    pop(): T | undefined {
        return this.array.pop();
    }

    size(): number {
        return this.array.length;
    }
}
