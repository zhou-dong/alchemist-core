import Queue from "../htmlQueue";

let queue: Queue<number>;

beforeEach(() => {
    queue = new Queue(document.createElement("div"));
});

test("offer", () => {
    for (let i = 0; i < 10; i++) {
        expect(queue.size()).toBe(i);
        queue.offer(i);
        expect(queue.size()).toBe(i + 1);
        expect(queue.peek()).toBe("0");
    }
});

test("peek", () => {
    for (let i = 0; i < 10; i++) {
        expect(queue.size()).toBe(i);
        queue.offer(i);
        expect(queue.size()).toBe(i + 1);
        expect(queue.peek()).toBe("0");
    }
});

test("poll", () => {
    const size = 10;
    for (let i = 0; i < size; i++) {
        expect(queue.size()).toBe(i);
        queue.offer(i);
        expect(queue.size()).toBe(i + 1);
    }

    for (let i = 0; i < size; i++) {
        expect(queue.size()).toBe(size - i);
        expect(queue.poll()).toBe(i.toString());
    }
});

test("size", () => {
    for (let i = 0; i < 10; i++) {
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
