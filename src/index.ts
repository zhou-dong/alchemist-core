import Stack from "./stack";
import Queue from "./queue";
import Actions from "./commons/actions";

class Index extends Actions {
    private readonly parent: HTMLElement;

    constructor(parent: HTMLElement) {
        super([]);
        this.parent = parent;
    }

    createStack<T>(size?: number, id?: string) {
        return new Stack<T>(this.parent, size, id, this.actions);
    }

    createQueue<T>(size?: number, id?: string) {
        return new Queue<T>(this.parent, size, id, this.actions);
    }
}

export { Stack };
export { Queue };
export { Index };
