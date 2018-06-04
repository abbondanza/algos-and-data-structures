const zigZag = (root, callback) => {
    /*
            M
          /  \
        A     X
         \   / \
         B  O   Z
           /   /
          N   Y
    */
    /*
    M
    left, right  A X
    right, left, right, left  Z O B
    leftm right left right N Y

    M.left  M.right

    */


    let q = [root]; // [M]
    let q2 = [];
    let level = 1;
    while(q.length) {
        let curr = q.shift(); // []
        callback(curr); // "Visit"
        if(curr.left) q2.push(curr.left); // [A]
        if(curr.right) q2.push(curr.right); // [A, X]
        while(q2.length) {
            let inner = q2.shift();
            callback(inner); // "Visit"
            if(inner.right) q.push(inner.right); // [A]
            if(inner.left) q.push(inner.left); // [A, X]
        }
    }
}

export default zigZag;

