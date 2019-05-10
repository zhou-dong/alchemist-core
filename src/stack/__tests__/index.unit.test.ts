import Stack from "..";
import { PushAction, PeekAction, IsEmptyAction, SizeAction, PopAction } from "../stack";

let stack: Stack<number>;

beforeEach(() => {
    stack = new Stack(document.createElement("div"), 100);
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
    expect(() => stack.peek()).toThrowError();
    for (let i = 0; i < 10; i++) {
        expect(stack.size()).toBe(i);
        stack.push(i);
        expect(stack.size()).toBe(i + 1);
        expect(stack.peek()).toBe(i);
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

// test("actions", () => {
//     stack.push(1);
//     stack.peek();
//     stack.isEmpty();
//     stack.size();
//     stack.pop();

//     const actions = Array();
//     actions.push(PushAction)
//     actions.push(PeekAction);
//     actions.push(IsEmptyAction);
//     actions.push(SizeAction);
//     actions.push(PopAction);

//     const actual = new ArrayIterator(actions)
//     const expected = stack.listIterator()

//     while (expected.hasNext()) {
//         typeof expected.next() === actual.next()
//     }
// });
