import Animator from "../stack.animator";

let animator: Animator<number>;

beforeEach(() => {
    animator = new Animator();
});

// test("push", () => {

// });

// test("peek", () => {

// });


// test("pop", () => {

// });

// test("size", () => {

// });

test("isEmpty", () => {
    expect(animator.isEmpty()).toBeTruthy;
    animator.push(1);
    expect(animator.isEmpty()).toBeFalsy;
    animator.pop();
    expect(animator.isEmpty()).toBeTruthy;
});
