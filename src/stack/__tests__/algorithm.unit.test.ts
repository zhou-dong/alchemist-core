import { Stack } from "../algorithm";

let stack: Stack<number>;

beforeEach(() => {
    stack = new Stack();
});

test("push", () => {
    stack.push(1);
    expect(stack.size()).toBe(1);
});

test("peek", () => {
    stack.push(10);
    expect(stack.peek()).toBe(10);
});

test("pop", () => {
    stack.push(11);
    expect(stack.pop()).toBe(11);
});

test("size", () => {
    stack.push(11);
    expect(stack.size()).toBe(1);
});
