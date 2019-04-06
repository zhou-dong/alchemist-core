import Stack from "./stack";
import Queue from "./queue";
import Actions from "./commons/actions";

class Index extends Actions {
    private readonly parent: HTMLElement;

    constructor(parent: HTMLElement) {
        super([]);
        this.parent = parent;
    }

    createStack<T>(id?: string) {
        return new Stack<T>(this.parent, this.actions, id);
    }

    createQueue<T>(id?: string) {
        return new Queue<T>(this.parent, this.actions, id);
    }
}

export { Stack };
export { Queue };
export { Index };
