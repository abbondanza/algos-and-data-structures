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
    let stk1 = [root];
    let stk2 = [];
    while(stk1.length || stk2.length) {
        while(stk1.length) {
            let top = stk1.pop();
            callback(top);
            if(top.right) stk2.push(top.right);
            if(top.left) stk2.push(top.left);
        }

        while(stk2.length) {
            let top = stk2.pop();
            callback(top);
            if(top.left) stk1.push(top.left);
            if(top.right) stk1.push(top.right);
        }
    }
}

export default zigZag;

