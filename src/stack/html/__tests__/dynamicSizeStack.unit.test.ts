import Stack from "../dynamicSizeStack";

let stack: Stack<number>;

beforeEach(() => {
    stack = new Stack(document.createElement("div"), "test-stack");
});

test("push", () => {
    for (let i = 0; i < 10; i++) {
        stack.push(i);
        expect(stack.size()).toBe(i + 1);
        expect(stack.peek()).toBe(i.toString());
    }
});

test("peek", () => {
    expect(() => stack.peek()).toThrowError();
    for (let i = 0; i < 10; i++) {
        stack.push(i);
        expect(stack.size()).toBe(i + 1);
        expect(stack.peek()).toBe(i.toString());
    }
});

test("pop", () => {
    expect(() => stack.pop()).toThrowError();
    const size = 10;
    for (let i = 0; i < size; i++) {
        expect(stack.size()).toBe(i);
        stack.push(i);
        expect(stack.size()).toBe(i + 1);
    }

    for (let i = size - 1; i >= 0; i--) {
        expect(stack.pop()).toBe(i.toString());
        expect(stack.size()).toBe(i);
    }
});

test("size", () => {
    for (let i = 0; i < 10; i++) {
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
