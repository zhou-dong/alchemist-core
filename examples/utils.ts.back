// export default class implements ListIterable<Action>, Animatable {
//     protected readonly forwardActions: Action[];
//     protected readonly backwardActions: Action[];
//     private readonly invalid: number = -1;
//     private iterator: ListIterator<Action>;
//     private timer: number;

//     constructor(forwardActions?: Action[], backwardActions?: Action[]) {
//         if (forwardActions && backwardActions) {
//             this.forwardActions = forwardActions;
//             this.backwardActions = backwardActions;
//         } else if (!forwardActions && !backwardActions) {
//             this.forwardActions = [];
//             this.backwardActions = [];
//         } else {
//             throw new Error("forwardActions and backwardActions must both null or both not null");
//         }
//         this.timer = this.invalid;
//         this.iterator = this.listIterator();
//     }

//     addAction(forwardAction: Action, backwardAction: Action): void {
//         this.forwardActions.push(forwardAction);
//         this.backwardActions.push(backwardAction);
//     }

//     listIterator(): ListIterator<Action> {
//         return new Actions(this.forwardActions);
//     }

//     isRunning(): boolean {
//         return this.timer !== this.invalid;
//     }

//     start(speed: number): void {
//         if (this.isRunning()) {
//             this.pause();
//         }
//         this.timer = setInterval(() => {
//             if (this.iterator.hasNext()) {
//                 this.iterator.next().animate();
//             } else {
//                 this.pause();
//             }
//         }, speed);
//     }

//     pause(): void {
//         clearTimeout(this.timer);
//         this.timer = this.invalid;
//     }

//     restart(speed: number): void {
//         this.pause();
//         this.iterator = this.listIterator();
//         this.start(speed);
//     }
// }

export { };
