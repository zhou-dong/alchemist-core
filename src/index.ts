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
        const holder = document.createElement("div");
        this.parent.appendChild(holder);
        return new Stack<T>(holder, this.actions, id);
    }

    createQueue<T>(id?: string) {
        const holder = document.createElement("div");
        this.parent.appendChild(holder);
        return new Queue<T>(holder, this.actions, id);
    }
}

export { Stack };
export { Queue };
export { Index };
