export enum ActionType {
    Push, Peek, Pop, Size, IsEmpty
}

export interface IStack<P> {
    push(payload: P): any;
    peek(): any;
    pop(): any;
    size(): any;
    isEmpty(): any;
}

export default class <P> implements IStack<P> {
    private array: P[];

    constructor() {
        this.array = [];
    }

    push(item: P): void {
        this.array.push(item);
    }

    peek(): P {
        return this.array[this.array.length - 1];
    }

    pop(): P | undefined {
        return this.array.pop();
    }

    size(): number {
        return this.array.length;
    }

    isEmpty(): boolean {
        return this.array.length === 0;
    }
}
