import Stack from "./stack";
import Queue from "./queue";
import AnimatorActions from "./core/animatorActions";
import { AnimatorInterval } from "./core/animatorInterval";

class Index extends AnimatorInterval<any> {
    private actions: AnimatorActions<any>;
    private parent: HTMLElement;

    constructor(parent: HTMLElement) {
        const actions = new AnimatorActions<any>();
        super(actions);
        this.actions = actions;
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
