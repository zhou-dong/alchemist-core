import Animator from "./animator";

export default interface Animatable {
    animator(): Animator;
}
