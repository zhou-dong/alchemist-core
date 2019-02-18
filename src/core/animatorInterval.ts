import Iterator from "./iterator";
import Iterable from "./iterable";
import AnimatorAction from "./animatorAction";

export default interface Intervalable {
    play(timeout: number): void;
    pause(): void;
    stop(): void;
}

export class AnimatorInterval<T> implements Intervalable {
    private timerId: any;
    private iterator: Iterator<AnimatorAction<T>>;
    private readonly iterable: Iterable<AnimatorAction<T>>;

    constructor(iterable: Iterable<AnimatorAction<T>>) {
        this.timerId = -1;
        this.iterable = iterable;
        this.iterator = iterable.iterator();
    }

    play(timeout: number): void {
        this.timerId = setInterval(() => {
            if (!this.iterator.hasNext()) {
                clearInterval(this.timerId);
            } else {
                this.iterator.next().animate();
            }
        }, timeout)
    }

    pause(): void {
        clearInterval(this.timerId);
    }

    stop(): void {
        clearInterval(this.timerId);
        this.iterator = this.iterable.iterator();
    }
}
