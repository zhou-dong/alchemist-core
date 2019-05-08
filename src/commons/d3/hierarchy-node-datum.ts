export default interface HierarchyNodeDatum<T> {
    name: T;
    children?: Array<this>;
}
