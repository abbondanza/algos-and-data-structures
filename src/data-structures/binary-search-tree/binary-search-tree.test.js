import BinarySearchTree from './binary-search-tree';

test('isEmpty() on empty tree', () => {
    const tree = new BinarySearchTree();
    expect(tree.isEmpty()).toBe(true);
})

test('isEmpty() on non-empty tree', () => {
    const tree = new BinarySearchTree();
    tree.insert('R')
    expect(tree.isEmpty()).toBe(false);
})

test('insert()', () => {
    const tree = new BinarySearchTree();
    tree.insert('M')
    tree.insert('A')
    tree.insert('Z');
    tree.insert('O');
    tree.insert('B');

    expect(tree.countNodes()).toBe(5);
    expect(tree.contains('M')).toBe(true);
    expect(tree.contains('A')).toBe(true);
    expect(tree.contains('Z')).toBe(true);
    expect(tree.contains('O')).toBe(true);
    expect(tree.contains('B')).toBe(true);
})

test('insert() duplicates', () => {
    const tree = new BinarySearchTree();
    tree.insert('M');
    tree.insert('M');

    expect(tree.countNodes()).toBe(2);
    expect(tree.contains('M')).toBe(true);
    expect(tree.contains('Z')).toBe(false);
})
test('contains()', () => {
    const tree = new BinarySearchTree();
    tree.insert('M');
    tree.insert('A');
    tree.insert('Z');

    expect(tree.countNodes()).toBe(3);
    expect(tree.contains('M')).toBe(true);
    expect(tree.contains('A')).toBe(true);
    expect(tree.contains('Z')).toBe(true);
    expect(tree.contains('X')).toBe(false);
})

test('min()', () => {
    const tree = new BinarySearchTree();
    tree.insert('M');
    tree.insert('N');
    tree.insert('Z');
    tree.insert('X');
    tree.insert('A');

    expect(tree.min()).toBe('A');
})

test('min() on empty tree', () => {
    const tree = new BinarySearchTree();
    expect(tree.min()).toBeNull();
})
test('max()', () => {
    const tree = new BinarySearchTree();
    tree.insert('M');
    tree.insert('A');
    tree.insert('Z');
    tree.insert('X');

    expect(tree.max()).toBe('Z');
})

test('max() on empty tree', () => {
    const tree = new BinarySearchTree();
    expect(tree.max()).toBeNull();
})

test('remove()', () => {
    const tree = new BinarySearchTree();
    tree.insert('M');
    /*
            M
    */
    tree.insert('A');
    /*
            M
          /
        A
    */
    tree.insert('X');
    /*
            M
          /  \
        A     X
    */
    tree.insert('Z');
    /*
            M
          /  \
        A     X
               \
                Z
    */
    tree.insert('O');
    /*
            M
          /  \
        A     X
            /  \
           O    Z
    */
    tree.insert('Y');
    /*
            M
          /  \
        A     X
            /  \
           O    Z
               /
              Y
    */
    tree.remove('X');
    /*
            M
          /  \
        A     Y
            /  \
           O    Z
    */

    expect(tree.countNodes()).toBe(5);
    expect(tree.contains('X')).toBe(false);
})

test.skip('remove() with duplicates', () => {
    const tree = new BinarySearchTree();
    tree.insert('A');
    tree.insert('A');
    tree.insert('A');

    expect(tree.remove('A')).not.toThrow();
    expect(tree.countNodes()).toBe(2);
    expect(tree.contains('A')).toBe(true);
})

test.skip('remove() non-existent item', () => {
    const tree = new BinarySearchTree();
    tree.insert('A');
    tree.insert('B');
    tree.insert('C');
    expect(tree.remove('Z')).not.toThrow();
})
