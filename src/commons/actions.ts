import Iterable from "./iterable";
import Iterator from "./iterator";
import Action from "./action";

class ActionsIterator<T> implements Iterator<Action<T>> {
    private readonly actions: Action<T>[];
    private index: number;

    constructor(actions: Action<T>[]) {
        this.index = 0;
        this.actions = actions;
    }

    hasNext(): boolean {
        return this.index < this.actions.length;
    }

    next(): Action<T> {
        return this.actions[this.index++];
    }
}

export default class <T> implements Iterable<Action<T>> {
    private actions: Action<T>[];

    constructor() {
        this.actions = [];
    }

    add(animator: (payload?: T) => void, payload?: T): void {
        this.actions.push(new Action(animator, payload));
    }

    size(): number {
        return this.actions.length;
    }

    iterator(): Iterator<Action<T>> {
        return new ActionsIterator<T>(this.actions)
    }
}
