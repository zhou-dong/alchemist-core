import Queue, { IQueue, OfferAction, PeekAction, PollAction, SizeAction, IsEmptyAction } from "./queue";
import Action from "../commons/action";
import Actions from "../commons/actions";
import FixedSizeQueue from "./html/fixedSizeQueue";
import DynamicSizeQueue from "./html/dynamicSizeQueue";

export default class <T> extends Actions implements IQueue<T> {
    private readonly queue: IQueue<T>;
    private readonly htmlQueue: IQueue<T>;

    constructor(parent: HTMLElement, size?: number, id?: string, actions?: Action[]) {
        super(actions)
        this.queue = new Queue();
        this.htmlQueue = size ? new FixedSizeQueue(parent, size, id) : new DynamicSizeQueue(parent, id)
    }

    offer(item: T): void {
        this.addAction(new OfferAction(this.htmlQueue, item));
        this.queue.offer(item);
    }

    peek(): T {
        this.addAction(new PeekAction(this.htmlQueue));
        return this.queue.peek();
    }

    poll(): T {
        this.addAction(new PollAction(this.htmlQueue));
        return this.queue.poll();
    }

    size(): number {
        this.addAction(new SizeAction(this.htmlQueue));
        return this.queue.size();
    }

    isEmpty() {
        this.addAction(new IsEmptyAction(this.htmlQueue));
        return this.queue.isEmpty();
    }
}
