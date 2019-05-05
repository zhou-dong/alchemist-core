import Stack from "./stack";
import Queue from "./queue";
import Actions from "./commons/actions";
import Action from "./commons/action";
import ListIterable from "./commons/listIterable";
import ListIterator from "./commons/listIterator";

class Index extends Actions {
    private readonly parent: HTMLElement;

    constructor(parent: HTMLElement) {
        super([], []);
        this.parent = parent;
    }

    createStack<T>(size?: number, id?: string) {
        return new Stack<T>(this.parent, size, id, this.forwardActions, this.backwardActions);
    }

    createQueue<T>(size?: number, id?: string) {
        return new Queue<T>(this.parent, size, id, this.forwardActions, this.backwardActions);
    }
}

export { ListIterator, ListIterable, Action };
export { Stack };
export { Queue };
export { Index };
