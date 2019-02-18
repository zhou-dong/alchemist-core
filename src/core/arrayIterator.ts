import Iterator from "./iterator";

export default class <T> implements Iterator<T> {
    private readonly array: T[];
    private index: number;

    constructor(array: T[]) {
        this.array = array;
        this.index = 0;
    }

    hasNext(): boolean {
        return this.index < this.array.length;
    }

    next(): T {
        return this.array[this.index++];
    }
}
