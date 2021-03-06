import BinarySearchTree from '../../../data-structures/binary-search-tree/binary-search-tree';
import maxWidth from './max-width';

test('maxWidth()', () => {
    const tree = new BinarySearchTree();
    tree.insert(8);
    /*
            8
    */
    tree.insert(4);
    /*
            8
          /
        4
    */
    tree.insert(10);
    /*
            8
          /   \
        4      10
    */
    tree.insert(12);
    /*
            8
          /   \
        4      10
                 \
                 12
    */
    tree.insert(9);
    /*
            8
          /   \
        4      10
              /  \
             9   12
    */
    tree.insert(11);
     /*
            8
          /   \
        4      10
              /  \
             9   12
                /
               11
    */
    tree.insert(6);
    /*
            8
          /   \
        4      10
         \    /  \
          6  9   12
                /
               11
    */
    tree.insert(1);
    /*
            8
          /   \
        4      10
       /  \   /  \
      1    6 9   12
                /
               11
    */

    expect(maxWidth(tree.getRoot())).toEqual(4);
})
