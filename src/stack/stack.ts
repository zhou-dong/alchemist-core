export interface IStack<T> {
    push(item: T): T;
    peek(): T | undefined;
    pop(): T | undefined;
    size(): number;
    isEmpty(): boolean;
}

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
