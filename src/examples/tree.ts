import TreeNode from "../trees/binary-tree";
import Actions from "../commons/actions";

const actions = new Actions([]);
const snapshots = ([] as any);
const createTreeNode = (val: string) => TreeNode(val, snapshots, actions , document.body);

const root = createTreeNode("root");
root.left = createTreeNode("l");
root.right = createTreeNode("r");

actions.next().animate();
actions.next().animate();
actions.next().animate();
console.log(root);

const d = document.createElement("div")
// d.innerText("hello world");

document.body.appendChild(d);

export default {};
