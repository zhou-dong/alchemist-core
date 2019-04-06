import Action from "../commons/action";

export interface IQueue<T> {
    offer(item: T): void;
    peek(): T | undefined;
    poll(): T | undefined;
    size(): number;
    isEmpty(): boolean;
}

export default class Queue<T> implements IQueue<T> {
    private readonly array: T[];

    constructor() {
        this.array = [];
    }

    offer(item: T): void {
        this.array.push(item);
    }

    peek(): T {
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

abstract class QueueAction<T> implements Action {
    abstract animate(): any
    protected readonly queue: IQueue<T>;

    constructor(queue: IQueue<T>) {
        this.queue = queue;
    }
}

export class OfferAction<T> extends QueueAction<T> {
    private readonly payload: T;

    constructor(queue: IQueue<T>, payload: T) {
        super(queue)
        this.payload = payload;
    }

    animate() {
        this.queue.offer(this.payload);
    }
}

export class PeekAction<T> extends QueueAction<T> {
    constructor(queue: IQueue<T>) {
        super(queue)
    }

    animate() {
        this.queue.peek();
    }
}

export class PollAction<T> extends QueueAction<T> {
    constructor(queue: IQueue<T>) {
        super(queue)
    }

    animate() {
        this.queue.poll();
    }
}

export class SizeAction<T> extends QueueAction<T> {
    constructor(queue: IQueue<T>) {
        super(queue)
    }

    animate() {
        this.queue.size();
    }
}

export class IsEmptyAction<T> extends QueueAction<T> {
    constructor(queue: IQueue<T>) {
        super(queue)
    }

    animate() {
        this.queue.isEmpty();
    }
}
