import Queue from "../fixedSizeQueue";

let queue: Queue<number>;
const capacity = 10;

beforeEach(() => {
    queue = new Queue(document.createElement("div"), capacity);
});

test("offer", () => {
    for (let i = 0; i < capacity; i++) {
        expect(queue.size()).toBe(i);
        queue.offer(i);
        expect(queue.size()).toBe(i + 1);
        expect(queue.peek()).toBe("0");
    }
});

test("peek", () => {
    expect(() => queue.peek()).toThrowError();
    for (let i = 0; i < capacity; i++) {
        expect(queue.size()).toBe(i);
        queue.offer(i);
        expect(queue.size()).toBe(i + 1);
        expect(queue.peek()).toBe("0");
    }
});

test("poll", () => {
    expect(() => queue.poll()).toThrowError();
    for (let i = 0; i < capacity; i++) {
        expect(queue.size()).toBe(i);
        queue.offer(i);
        expect(queue.size()).toBe(i + 1);
    }

    for (let i = 0; i < capacity; i++) {
        expect(queue.size()).toBe(capacity - i);
        expect(queue.poll()).toBe(i.toString());
    }
});

test("size", () => {
    for (let i = 0; i < capacity; i++) {
        expect(queue.size()).toBe(i);
        queue.offer(i);
        expect(queue.size()).toBe(i + 1);
    }
});

test("isEmpty", () => {
    expect(queue.isEmpty()).toBeTruthy();
    queue.offer(100);
    expect(queue.isEmpty()).toBeFalsy();
    queue.poll();
    expect(queue.isEmpty()).toBeTruthy();
});

test("stack full exception", () => {
    for (let i = 0; i < capacity; i++) {
        queue.offer(i);
    }

    expect(() => queue.offer(10)).toThrowError();
});

test("negative capacity", () => {
    expect(() => new Queue(document.createElement("div"), -1)).toThrowError();
});
