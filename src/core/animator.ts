export default interface Animator {
    play(timeout: number): void;
    pause(): void;
    stop(): void;
}
