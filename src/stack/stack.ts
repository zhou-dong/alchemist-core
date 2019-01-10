import IStack from "./stack.interface";

export default class <T> implements IStack<T> {
    private array: T[];

    constructor() {
        this.array = [];
    }

    push(item: T): T {
        this.array.push(item);
        return item;
    }

    peek(): T | undefined {
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
