import ArrayIterator from "../arrayIterator";

test("array iterator", () => {
    const array = Array.from(Array(5).keys());
    const iterator = new ArrayIterator(array);

    array.forEach(item => {
        expect(iterator.hasNext()).toBeTruthy;
        expect(iterator.next()).toBe(item)
    });
});
