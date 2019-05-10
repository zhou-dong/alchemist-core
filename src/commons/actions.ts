import Action from "./action";
import { ListIterator } from "./iterators";

export default class Actions implements ListIterator<Action> {
    private cursor: number;
    private readonly actions: Action[];

    constructor(actions: Action[]) {
        this.actions = actions;
        this.cursor = 0;
    }

    add(action: Action) {
        this.actions.push(action);
    }

    previous(): Action {
        return this.actions[--this.cursor];
    }

    hasPrevious(): boolean {
        return this.cursor > 0;
    }

    previousIndex(): number {
        return this.cursor - 1;
    }

    next(): Action {
        return this.actions[this.cursor++];
    }

    hasNext(): boolean {
        return this.cursor < this.size();
    }

    nextIndex(): number {
        return this.cursor;
    }

    size(): number {
        return this.actions.length;
    }

    rewind(): void {
        this.cursor = 0;
    }
}
