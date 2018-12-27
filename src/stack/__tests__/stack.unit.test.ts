import Stack from "../stack";

let stack: Stack<number>;

beforeEach(() => {
    stack = new Stack();
});

test("push", () => {
    for (let i = 0; i < 10; i++) {
        expect(stack.size()).toBe(i);
        stack.push(i);
        expect(stack.size()).toBe(i + 1);
        expect(stack.peek()).toBe(i);
    }
});

test("peek", () => {
    expect(stack.peek()).toBeUndefined();
    for (let i = 0; i < 10; i++) {
        expect(stack.size()).toBe(i);
        stack.push(i);
        expect(stack.size()).toBe(i + 1);
        expect(stack.peek()).toBe(i);
    }
});

test("pop", () => {
    expect(stack.pop()).toBeUndefined();
    const size = 10;
    for (let i = 0; i < size; i++) {
        expect(stack.size()).toBe(i);
        stack.push(i);
        expect(stack.size()).toBe(i + 1);
    }

    for (let i = size - 1; i >= 0; i--) {
        expect(stack.pop()).toBe(i);
        expect(stack.size()).toBe(i);
    }
});

test("size", () => {
    for (let i = 0; i < 10; i++) {
        expect(stack.size()).toBe(i);
        stack.push(i);
        expect(stack.size()).toBe(i + 1);
    }
});

test("isEmpty", () => {
    expect(stack.isEmpty()).toBeTruthy();
    stack.push(100);
    expect(stack.isEmpty()).toBeFalsy();
    stack.pop();
    expect(stack.isEmpty()).toBeTruthy();
});
