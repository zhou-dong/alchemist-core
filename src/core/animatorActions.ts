import Iterable from "./iterable";
import Iterator from "./iterator";
import AnimatorAction from "./animatorAction";
import ArrayIterator from "./arrayIterator";

export default class <P> implements Iterable<AnimatorAction<P>> {
    private actions: AnimatorAction<P>[];

    constructor() {
        this.actions = [];
    }

    iterator(): Iterator<AnimatorAction<P>> {
        return new ArrayIterator(this.actions);
    }

    add(action: AnimatorAction<P>): void {
        this.actions.push(action);
    }
}
