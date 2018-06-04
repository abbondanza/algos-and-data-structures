import BinarySearchTree from '../../../data-structures/binary-search-tree/binary-search-tree';
import binaryTreeBFS from './binary-tree-bfs';

test('binaryTreeBFS()', () => {
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

    const traversal = [];
    binaryTreeBFS(tree.getRoot(), (node) => {
        traversal.push(node.value);
    });
    expect(traversal).toEqual(['M', 'A', 'X', 'O', 'Z', 'Y']);
})
