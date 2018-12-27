import Queue, { IQueue } from "./queue";
import Animatable from "../commons/animatable";

export default class <T> implements IQueue<T>, Animatable {

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
    isRunning(): boolean {
        throw new Error("Method not implemented.");
    }
    start(speed: number): void {
        throw new Error("Method not implemented.");
    }
    pause(): void {
        throw new Error("Method not implemented.");
    }
    stop(): void {
        throw new Error("Method not implemented.");
    }
    restart(speed: number): void {
        throw new Error("Method not implemented.");
    }

}
