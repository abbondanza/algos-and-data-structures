/*
    Zig-zag is a variation of a breadth-first binary tree algorithm.

    Given the following tree:
        M
      /  \
    A     X
     \   /  \
     B  O    Z
       /    /
      N    Y

    Algorithm should visit tree in this order:
    M A X Z O B N Y
*/
const zigZag = (root, callback) => {
    let oddStack = [root]; // this stack will hold all elements at each odd level
    let evenStack = []; // this stack will hold all elements at each even level
    while(oddStack.length || evenStack.length) {
        while(oddStack.length) {
            let top = oddStack.pop();
            callback(top);
            // at an even level, we want our elements
            // to be printed from left to right
            // so we push them onto the stack backwards
            if(top.right) evenStack.push(top.right);
            if(top.left) evenStack.push(top.left);
        }

        while(evenStack.length) {
            let top = evenStack.pop();
            callback(top);
            // at an even level, we want our elements
            // to be printed from right to left
            // so we push them onto the stack backwards
            if(top.left) oddStack.push(top.left);
            if(top.right) oddStack.push(top.right);
        }
    }
}

export default zigZag;

