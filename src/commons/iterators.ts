export interface Iterator<T> {
    hasNext(): boolean;
    next(): T;
}

export interface Iterable<T> {
    iterator(): Iterator<T>;
}

export interface ListIterator<T> extends Iterator<T> {
    previous(): T;
    hasPrevious(): boolean;
    previousIndex(): number;

    next(): T;
    hasNext(): boolean;
    nextIndex(): number;

    size(): number;
    rewind(): void;
}

export interface ListIterable<T> {
    listIterator(): ListIterator<T>;
}
