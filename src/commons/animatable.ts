export default interface Animatable {
    isRunning(): boolean;
    start(speed: number): void;
    pause(): void;
    stop(): void;
    restart(speed: number): void;
}
