import Iterator from "./iterator";

export default interface ListIterator<T> extends Iterator<T> {
    previous(): T;
    hasPrevious(): boolean;
    previousIndex(): number;

    next(): T;
    hasNext(): boolean;
    nextIndex(): number;

    size(): number;
    rewind(): void;
}
