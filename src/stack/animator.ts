import { IStack } from "./stack";

export default class <T> implements IStack<T> {

    push(item: T): T {
        throw new Error("Method not implemented.");
    }

    peek(): T | undefined {
        throw new Error("Method not implemented.");
    }

    pop(): T | undefined {
        throw new Error("Method not implemented.");
    }

    size(): number {
        throw new Error("Method not implemented.");
    }

    isEmpty(): boolean {
        throw new Error("Method not implemented.");
    }
}
