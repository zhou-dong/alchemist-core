import Stack from "./stack";
import Queue from "./queue";
import Action from "./commons/action";
import Actions from "./commons/actions";

class Index extends Actions {
    private readonly parent: HTMLElement;

    constructor(parent: HTMLElement) {
        super([]);
        this.parent = parent;
    }

    createStack<T>(id?: string) {
        const stackParent = document.createElement("div");
        this.parent.appendChild(stackParent);
        return new Stack<T>(stackParent, this.actions, id);
    }
}

export { Stack };
export { Queue };
export { Index };
