import Queue, { IQueue, OfferAction, PeekAction, PollAction, SizeAction, IsEmptyAction } from "./queue";
import HTMLQueue from "./htmlQueue";
import Action from "../commons/action";
import Actions from "../commons/actions";

export default class <T> extends Actions implements IQueue<T> {
    private readonly queue: Queue<T>;
    private readonly htmlQueue: HTMLQueue<T>;

    constructor(parent: HTMLElement, actions?: Action[], id?: string) {
        super(actions)
        this.queue = new Queue();
        this.htmlQueue = new HTMLQueue(parent, id)
    }

    offer(item: T): void {
        this.add(new OfferAction(this.htmlQueue, item));
        this.queue.offer(item);
    }

    peek(): T {
        this.add(new PeekAction(this.htmlQueue));
        return this.queue.peek();
    }

    poll(): T | undefined {
        this.add(new PollAction(this.htmlQueue));
        return this.queue.poll();
    }

    size(): number {
        this.add(new SizeAction(this.htmlQueue));
        return this.queue.size();
    }

    isEmpty() {
        this.add(new IsEmptyAction(this.htmlQueue));
        return this.queue.isEmpty();
    }
}
