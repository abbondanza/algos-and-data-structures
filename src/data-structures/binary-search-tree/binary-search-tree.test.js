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

test('inOrderTraversal()', () => {
    const tree = new BinarySearchTree();
    expect(_inOrderTraversalOf(tree)).toEqual([]);
});

test('inOrderTraversal()', () => {
    const tree = new BinarySearchTree();
    tree.insert('M');
    /*
            M
    */
    expect(_inOrderTraversalOf(tree)).toEqual(['M']);
    tree.insert('K');
    /*
            M
          /
        K
    */
    expect(_inOrderTraversalOf(tree)).toEqual(['K', 'M']);
    tree.insert('P');
    /*
            M
          /  \
        K     P
    */
    expect(_inOrderTraversalOf(tree)).toEqual(['K', 'M', 'P']);
    tree.insert('C');
    /*
            M
          /  \
        K     P
      /
     C
    */
    expect(_inOrderTraversalOf(tree)).toEqual(['C', 'K', 'M', 'P']);
    tree.insert('L');
    /*
            M
          /  \
        K     P
      /  \
     C    L
    */
    expect(_inOrderTraversalOf(tree)).toEqual(['C', 'K', 'L', 'M', 'P']);
});

test('remove() element with 2 children', () => {
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
    expect(_inOrderTraversalOf(tree)).toEqual(['A', 'M', 'O', 'Y', 'Z']);
})


test('remove() element with 1 child', () => {
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
    tree.remove('Z');
    /*
            M
          /  \
        A     X
            /  \
           O    Y
    */
    expect(_inOrderTraversalOf(tree)).toEqual(['A', 'M', 'O', 'X', 'Y']);
})

test('remove() leaf node', () => {
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
    tree.remove('O');
    /*
            M
          /  \
        A     X
               \
                Z
               /
              Y
    */
    expect(_inOrderTraversalOf(tree)).toEqual(['A', 'M', 'X', 'Y', 'Z']);
})

test('remove() root', () => {
    const tree = new BinarySearchTree();
    tree.insert('A');
    /*
            A
    */
    tree.insert('B');
    /*
            A
             \
              B
    */
    tree.insert('C');
    /*
            A
             \
              B
               \
                C
    */
    tree.remove('A');
    /*
              B
               \
                C
    */
    expect(_inOrderTraversalOf(tree)).toEqual(['B', 'C']);
})

test('remove() with duplicates', () => {
    const tree = new BinarySearchTree();
    tree.insert('A');
    /*
            A
    */
    tree.insert('B');
    /*
            A
             \
              B
    */
    tree.insert('C');
    /*
            A
             \
              B
               \
                C
    */
    tree.insert('A');
    /*
            A
             \
              B
            /  \
           A    C
    */
    tree.remove('A');
    /*
            A
             \
              B
               \
                C
    */
    expect(_inOrderTraversalOf(tree)).toEqual(['A', 'B', 'C']);
})

test('remove() non-existent item', () => {
    const tree = new BinarySearchTree();
    tree.insert('A');
    /*
            A
    */
    tree.insert('B');
    /*
            A
             \
              B
    */
    tree.insert('C');
    /*
            A
             \
              B
               \
                C
    */
    tree.remove('Z');
    expect(_inOrderTraversalOf(tree)).toEqual(['A', 'B', 'C']);
})

function _inOrderTraversalOf(tree) {
    const inOrder = [];
    tree.inOrderTraversal((element) => {
        inOrder.push(element);
    });
    return inOrder;
}
