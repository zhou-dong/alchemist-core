export default interface IStack<T> {

    push(item: T): T;

    peek(): T | undefined;

    pop(): T | undefined;

    size(): number;

    isEmpty(): boolean;
}
