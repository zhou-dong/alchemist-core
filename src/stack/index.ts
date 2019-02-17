import Stack, { ActionType, IStack } from "./stack";
import HTMLStack from "./htmlStack";
import Actions from "./actions";
import Action from "../core/action";
import Animatable from "../core/animatable";
import Animator from "../core/animator";
import SimpleAnimator from "../core/simpleAnimator";

export default class <P> implements IStack<P>, Animatable {
    private actions: Actions<P>;
    private stack: Stack<P>;
    private htmlStack: HTMLStack<P>;

    constructor(parent: HTMLElement) {
        this.actions = new Actions();
        this.stack = new Stack();
        this.htmlStack = new HTMLStack(parent);
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
                if (action.payload) {
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
