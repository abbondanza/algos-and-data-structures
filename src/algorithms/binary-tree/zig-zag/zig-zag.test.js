import BinarySearchTree from '../../../data-structures/binary-search-tree/binary-search-tree';
import zigZag from './zig-zag';
import zigZagQueues from './zig-zag-queues';

test('zigZag()', () => {
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
    tree.insert('N');
    /*
            M
          /  \
        A     X
            /  \
           O    Z
          /    /
         N    Y
    */
    tree.insert('B');
    /*
            M
          /  \
        A     X
         \   /  \
         B  O    Z
           /    /
          N    Y
    */

    const traversal = [];
    zigZag(tree.getRoot(), (node) => {
        traversal.push(node.value);
    });

    const traversal2 = [];
    zigZag(tree.getRoot(), (node) => {
        traversal2.push(node.value);
    });
    expect(traversal).toEqual(['M', 'A', 'X', 'Z', 'O', 'B', 'N', 'Y']);
    expect(traversal2).toEqual(traversal);
})
