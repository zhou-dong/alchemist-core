import Iterator from "./iterator";

export default interface Iterable<T> {
    iterator(): Iterator<T>;
}
