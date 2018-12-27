export interface IQueue<T> {
    offer(item: T): T;
    peek(): T | undefined;
    poll(): T | undefined;
    size(): number;
    isEmpty(): boolean;
}

export default class Queue<T> implements IQueue<T> {
    private array: T[];

    constructor() {
        this.array = [];
    }

    offer(item: T): T {
        this.array.push(item);
        return item;
    }

    peek(): T | undefined {
        return this.array[0];
    }

    poll(): T | undefined {
        return this.array.shift();
    }

    size(): number {
        return this.array.length;
    }

    isEmpty(): boolean {
        return this.array.length === 0;
    }
}
