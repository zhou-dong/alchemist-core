import { IQueue } from "./queue";

export default class <T> implements IQueue<T> {

    offer(item: T): T {
        throw new Error("Method not implemented.");
    }

    peek(): T | undefined {
        throw new Error("Method not implemented.");
    }

    poll(): T | undefined {
        throw new Error("Method not implemented.");
    }

    size(): number {
        throw new Error("Method not implemented.");
    }

    isEmpty(): boolean {
        throw new Error("Method not implemented.");
    }
}
