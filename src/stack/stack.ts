export default interface IStack<T extends any> {

    push(item: T): void;

    peek(): T | undefined;

    pop(): T | undefined;

    size(): number;
}
