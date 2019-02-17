import { ActionType, IStack } from "./stack";
import Action from "../core/action";
import Iterable from "../core/iterable";
import Iterator from "../core/iterator";
import ArrayIterator from "../core/arrayIterator";

export default class <P> implements IStack<P>, Iterable<Action<ActionType, P>> {
    private actions: Action<ActionType, P>[];

    constructor() {
        this.actions = [];
    }

    push(payload: P) {
        this.actions.push({ type: ActionType.Push, payload })
    }

    peek() {
        this.actions.push({ type: ActionType.Peek });
    }

    pop() {
        this.actions.push({ type: ActionType.Pop });
    }

    size() {
        this.actions.push({ type: ActionType.Size });
    }

    isEmpty() {
        this.actions.push({ type: ActionType.IsEmpty });
    }

    iterator(): Iterator<Action<ActionType, P>> {
        return new ArrayIterator(this.actions);
    }
}
