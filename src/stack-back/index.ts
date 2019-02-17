import Actions from "../commons/actions";
import Animatable from "../commons/animatable";
import IStack from "./stack.interface";
import Stack from "./stack";
import Animator from "./stack.animator";
import Animators from "../commons/animators";

export default class <T> implements IStack<T>, Animatable {
    private stack: Stack<T>;
    private actions: Actions<T>;
    private animator: Animator<T>;
    private animators: Animators<T>;

    constructor(actions?: Actions<T>) {
        this.stack = new Stack<T>();
        this.actions = actions || new Actions<T>();
        this.animator = new Animator<T>();
        this.animators = new Animators(this.actions);
    }

    push(item: T): T {
        const func = (item?: T): void => {
            if (item !== undefined) {
                this.animator.push(item);
            }
        }
        this.actions.add(func, item)
        return this.stack.push(item);
    }

    peek(): T | undefined {
        this.actions.add(this.animator.peek);
        return this.stack.peek();
    }

    pop(): T | undefined {
        this.actions.add(this.animator.pop);
        return this.stack.pop();
    }

    size(): number {
        this.actions.add(this.animator.size);
        return this.stack.size();
    }

    isEmpty(): boolean {
        this.actions.add(this.animator.isEmpty);
        return this.stack.isEmpty();
    }

    isRunning(): boolean {
        return this.animators.isRunning();
    }

    start(speed: number): void {
        this.animators.start(speed);
    }

    pause(): void {
        this.animators.pause();
    }

    stop(): void {
        this.animators.stop();
    }

    restart(speed: number): void {
        this.animators.restart(speed);
    }
}
