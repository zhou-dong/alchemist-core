export default interface HierarchyDatum<T> {
    name?: T;
    children?: Array<this>;
}
