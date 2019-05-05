import ListIterator from "./listIterator";

export default interface ListIterable<T> {
    listIterator(): ListIterator<T>;
}
