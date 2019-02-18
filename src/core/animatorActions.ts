import Iterable from "./iterable";
import Iterator from "./iterator";
import AnimatorAction from "./animatorAction";
import ArrayIterator from "./arrayIterator";

export default class <T> implements Iterable<AnimatorAction<T>> {
    private actions: AnimatorAction<T>[];

    constructor() {
        this.actions = [];
    }

    iterator(): Iterator<AnimatorAction<T>> {
        return new ArrayIterator(this.actions);
    }

    add(action: AnimatorAction<T>): void {
        this.actions.push(action);
    }
}
