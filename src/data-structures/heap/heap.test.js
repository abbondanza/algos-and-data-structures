import Heap from './heap';

const maxComparator = (a, b) => {
    return a - b;
}

const minComparator = (a, b) => {
    return b - a;
}

test('isEmpty() - empty heap', () => {
    const heap = new Heap(maxComparator);
    expect(heap.isEmpty()).toBe(true);
})

test('size() - empty heap', () => {
    const heap = new Heap(maxComparator);
    expect(heap.size()).toBe(0);
})


test('top() - empty heap', () => {
    const heap = new Heap(maxComparator);
    expect(heap.top()).toBe(null);
})


test('insert()', () => {
    const heap = new Heap(maxComparator);
    heap.insert(5);
    heap.insert(9);
    heap.insert(-1);
    heap.insert(20);
    heap.insert(-42);

    expect(heap.size()).toBe(5);
})

test('insert() - max heap', () => {
    const heap = new Heap(maxComparator);
    heap.insert(5);
    heap.insert(9);
    heap.insert(-1);
    heap.insert(20);
    heap.insert(-42);

    expect(heap.top()).toBe(20);
})

test('insert() - min heap', () => {
    const heap = new Heap(minComparator);
    heap.insert(5);
    heap.insert(9);
    heap.insert(-1);
    heap.insert(20);
    heap.insert(0);

    expect(heap.top()).toBe(-1);
})

test.skip('extractTop() - max heap', () => {
    const heap = new Heap(maxComparator);
    heap.insert(5);
    heap.insert(9);
    heap.insert(-1);
    heap.insert(20);
    heap.insert(-42);

    expect(heap.extractTop()).toBe(20);
    expect(heap.extractTop()).toBe(9);
    expect(heap.extractTop()).toBe(5);
    expect(heap.extractTop()).toBe(-1);
    expect(heap.extractTop()).toBe(-42);
})

test.skip('extractTop() - min heap', () => {
    const heap = new Heap(minComparator);
    heap.insert(5);
    /*
            5
    */
    heap.insert(9);
    /*
            5
           /
          9
    */
    heap.insert(-1);
    /*
            -1
           /  \
          9   5
    */
    heap.insert(20);
    /*
            -1
           /  \
          9    5
         /
        20
    */
    heap.insert(0);
    /*
            -1
           /  \
          0    5
         / \
        20  9
    */

    expect(heap.extractTop()).toBe(-1);
    /*
             0
           /  \
          9    5
         /
        20
    */
    expect(heap.extractTop()).toBe(0);
    /*
            5
           / \
          9   20
    */
    expect(heap.extractTop()).toBe(5);
    /*
            9
           /
          20
    */
    expect(heap.extractTop()).toBe(9);
    /*
          20
    */
    expect(heap.extractTop()).toBe(20);
})

test('extractTop() - empty heap', () => {
    const heap = new Heap(maxComparator);
    expect(heap.extractTop()).toBe(null);
})

test('replaceRoot() - max heap', () => {
    const heap = new Heap(maxComparator);
    heap.insert(5);
    /*
            5
    */
    heap.insert(9);
    /*
            9
           /
          5
    */
    heap.insert(-1);
    /*
            9
           / \
          5  -1
    */
    heap.insert(20);
    /*
            20
           / \
          9  -1
         /
        5
    */
    heap.insert(-42);
    /*
            20
           / \
          9  -1
         / \
        5  -42
    */

    expect(heap.replaceRoot(8)).toBe(20);
    /*
            9
           / \
          8  -1
         / \
        5  -42
    */
    expect(heap.replaceRoot(0)).toBe(9);
    /*
            8
           / \
          5  -1
         / \
        0  -42
    */
    expect(heap.top()).toBe(8);
})

test('replaceRoot() - min heap', () => {
    const heap = new Heap(minComparator);
    heap.insert(5);
    /*
            5
    */
    heap.insert(9);
    /*
            5
           /
          9
    */
    heap.insert(-1);
    /*
            -1
           /  \
          9   5
    */
    heap.insert(20);
    /*
            -1
           /  \
          9    5
         /
        20
    */
    heap.insert(0);
    /*
            -1
           /  \
          0    5
         / \
        20  9
    */

    expect(heap.replaceRoot(8)).toBe(-1);
    /*
            0
           / \
          8   5
         / \
        20  9
    */

    expect(heap.replaceRoot(7)).toBe(0);
    /*
             5
           /   \
          8     7
         / \
        20  9
    */

    expect(heap.top()).toBe(5);
})


/*
    constructor() {}
    top() {}
    insert() {}
    extractTop() {}
    replaceRoot() {}
    size() {}
    isEmpty() {}
*/
