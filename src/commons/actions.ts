import Iterable from "./iterable";
import Iterator from "./iterator";
import Action from "./action";
import Animatable from "./animatable";
import ArrayIterator from "./arrayIterator";

export default class implements Iterable<Action>, Animatable {
    private readonly invalid: number = -1;
    protected readonly actions: Action[];
    private iterators: Iterator<Action>;
    private timer: number;

    constructor(actions?: Action[]) {
        if (actions) {
            this.actions = actions;
        } else {
            this.actions = [];
        }
        this.timer = this.invalid;
        this.iterators = this.iterator();
    }

    add(action: Action): void {
        this.actions.push(action);
    }

    iterator(): Iterator<Action> {
        return new ArrayIterator(this.actions);
    }

    isRunning(): boolean {
        return this.timer !== this.invalid;
    }

    start(speed: number): void {
        if (this.isRunning()) {
            this.pause();
        }
        this.timer = setInterval(() => {
            if (this.iterators.hasNext()) {
                this.iterators.next().animate();
            } else {
                this.pause();
            }
        }, speed);
    }

    pause(): void {
        clearTimeout(this.timer);
        this.timer = this.invalid;
    }

    restart(speed: number): void {
        this.pause();
        this.iterators = this.iterator();
        this.start(speed);
    }
}
