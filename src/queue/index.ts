import Queue, { IQueue, IQueueWithDeleteLast, OfferAction, PeekAction, PollAction, SizeAction, IsEmptyAction } from "./queue";
import Action from "../commons/action";
import Actions from "../commons/actions";
import FixedSizeQueue from "./html/fixedSizeQueue";
import DynamicSizeQueue from "./html/dynamicSizeQueue";

export default class <T> extends Actions implements IQueue<T> {
    private readonly queue: IQueue<T>;
    private readonly htmlQueue: IQueueWithDeleteLast<T>;

    constructor(
        parent: HTMLElement,
        size?: number,
        id?: string,
        forwardActions?: Action[],
        backwardActions?: Action[]
    ) {
        super([])
        this.queue = new Queue();
        this.htmlQueue = size ? new FixedSizeQueue(parent, size, id) : new DynamicSizeQueue(parent, id)
    }

    offer(item: T): void {
        // this.addAction(new OfferAction(this.htmlQueue, item), new PollAction(this.htmlQueue));
        this.queue.offer(item);
    }

    peek(): T {
        // this.addAction(new PeekAction(this.htmlQueue), new PeekAction(this.htmlQueue));
        return this.queue.peek();
    }

    poll(): T {
        // this.addAction(new PollAction(this.htmlQueue), new OfferAction(this.htmlQueue, this.queue.peek()));
        return this.queue.poll();
    }

    size(): number {
        // this.addAction(new SizeAction(this.htmlQueue), new SizeAction(this.htmlQueue));
        return this.queue.size();
    }

    isEmpty() {
        // this.addAction(new IsEmptyAction(this.htmlQueue), new IsEmptyAction(this.htmlQueue));
        return this.queue.isEmpty();
    }
}
