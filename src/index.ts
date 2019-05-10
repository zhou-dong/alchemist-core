import Stack from "./stack";
import Queue from "./queue";
import Actions from "./commons/actions";
import Action from "./commons/action";
import { ListIterator, ListIterable } from "./commons/iterators";
import TreeNode from "./trees/binary-tree";

class Index extends Actions {
    private readonly parent: HTMLElement;

    constructor(parent: HTMLElement) {
        super([]);
        this.parent = parent;
    }

    createStack<T>(size?: number, id?: string) {
        return new Stack<T>(this.parent, size, id, [], []);
    }

    createQueue<T>(size?: number, id?: string) {
        return new Queue<T>(this.parent, size, id, [], []);
    }
}

export { ListIterator, ListIterable, Action };
export { Stack };
export { Queue };
export { Index };
export { TreeNode };
