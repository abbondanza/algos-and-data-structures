const binaryTreeBFS = (root, callback) => {
    let q = [root];
    while(q.length) {
        let curr = q.shift();
        callback(curr);
        if(curr.left) q.push(curr.left);
        if(curr.right) q.push(curr.right);
    }
}

export default binaryTreeBFS;

