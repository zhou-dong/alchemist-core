export default interface TreeNode<T> {
    val: T;
    left?: this;
    right?: this;
}

