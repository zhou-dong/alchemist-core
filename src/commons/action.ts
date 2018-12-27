export default class <T> {
    private readonly payload?: T;
    private readonly animator: (payload?: T) => void;

    constructor(animator: (payload?: T) => void, payload?: T) {
        this.payload = payload;
        this.animator = animator;
    }

    animate(): void {
        this.animator(this.payload);
    }
}
