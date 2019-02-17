import Iterator from "./iterator";
import Iterable from "./iterable";
import Animator from "./animator";

export default class <T> implements Animator {
    private timerId: any;
    private iterator: Iterator<T>;
    private iterable: Iterable<T>;
    private animate: (t: T) => any;

    constructor(iterable: Iterable<T>, animate: (t: T) => any) {
        this.iterable = iterable;
        this.iterator = iterable.iterator();
        this.animate = animate;
        this.timerId = -1;
    }

    play(timeout: number): void {
        this.timerId = setInterval(() => {
            if (!this.iterator.hasNext()) {
                clearInterval(this.timerId);
            } else {
                this.animate(this.iterator.next());
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
