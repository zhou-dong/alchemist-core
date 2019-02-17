import Stack, { ActionType, IStack } from "./stack";
import HTMLStack from "./htmlStack";
import Actions from "./actions";
import Action from "../core/action";
import Animatable from "../core/animatable";
import Animator from "../core/animator";
import SimpleAnimator from "../core/simpleAnimator";
import Iterator from "../commons/iterator";

export default class <P> implements IStack<P>, Animator {
    play(timeout: number): void {
        this.iterator = this.actions.iterator();
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
        this.iterator = this.actions.iterator();
    }

    private timerId: any;
    private actions: Actions<P>;
    private stack: Stack<P>;
    private htmlStack: HTMLStack<P>;
    private iterator: Iterator<Action<ActionType, P>>;

    constructor(parent: HTMLElement) {
        this.actions = new Actions();
        this.stack = new Stack();
        this.htmlStack = new HTMLStack(parent);
        this.iterator = this.actions.iterator();
    }

    push(payload: P): void {
        this.actions.push(payload);
        this.stack.push(payload);
    }

    peek(): P {
        this.actions.peek();
        return this.stack.peek();
    }

    pop(): P | undefined {
        this.actions.pop();
        return this.stack.pop();
    }

    size() {
        this.actions.size();
        return this.stack.size();
    }

    isEmpty() {
        this.actions.isEmpty();
        return this.stack.isEmpty();
    }

    animator(): Animator {
        return new SimpleAnimator<Action<ActionType, P>>(this.actions, this.animate);
    }

    animate(action: Action<ActionType, P>): any {
        switch (action.type) {
            case ActionType.Push: {
                if (action.payload !== undefined) {
                    this.htmlStack.push(action.payload);
                } else {
                    throw new Error("stack push method can not find payload.");
                }
                break;
            }
            case ActionType.Peek: {
                this.htmlStack.peek();
                break;
            }
            case ActionType.Pop: {
                this.htmlStack.pop();
                break;
            }
            case ActionType.Size: {
                this.htmlStack.size();
                break;
            }
            case ActionType.IsEmpty: {
                this.htmlStack.isEmpty();
                break;
            }
        }
    }
}
