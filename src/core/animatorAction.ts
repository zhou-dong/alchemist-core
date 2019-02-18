import Action from "./action";
import Animator from "./animator";

export default interface AnimatorAction<P> extends Action<P>, Animator { }
