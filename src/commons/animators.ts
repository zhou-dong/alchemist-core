import Animatable from "./animatable";
import Iterator from "./iterator";
import Actions from "./actions";
import Action from "./action";

export default class <T> implements Animatable {
    private readonly invalid: number = -1;
    private timer: number;
    private actions: Actions<T>;
    private iterator: Iterator<Action<T>>;

    constructor(actions: Actions<T>) {
        this.actions = actions;
        this.timer = this.invalid;
        this.iterator = this.actions.iterator();
    }

    isRunning(): boolean {
        return this.timer !== this.invalid;
    }

    start(speed: number): void {
        if (this.isRunning()) {
            return;
        }
        this.timer = setInterval(() => {
            if (this.iterator.hasNext()) {
                this.iterator.next().animate();
            } else {
                this.stop();
            }
        }, speed);
    }

    pause(): void {
        clearTimeout(this.timer);
        this.timer = this.invalid;
    }

    stop(): void {
        clearTimeout(this.timer);
        this.timer = this.invalid;
        this.iterator = this.actions.iterator();
    }

    restart(speed: number): void {
        this.stop();
        this.start(speed);
    }
}
