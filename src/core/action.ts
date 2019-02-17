export default interface Action<T, P> {
    type: T;
    payload?: P;
}
