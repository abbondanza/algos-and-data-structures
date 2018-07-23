const zigZagQueues = (root, callback) => {
    let q1 = [root];
    let q2 = [];
    let res = [];
    let level = 0;
    while(q1.length || q2.length) {
        while(q1.length) {
            let curr = q1.shift();
            if(!res[level]) { res[level] = []; }
            res[level].push(curr);
            if(curr.left) q2.push(curr.left);
            if(curr.right) q2.push(curr.right);
        }
        level++;

        while(q2.length) {
            let curr = q2.shift();
            if(!res[level]) { res[level] = []; }
            res[level].push(curr);
            if(curr.left) q1.push(curr.left);
            if(curr.right) q1.push(curr.right);
        }
        level++;
    }

    res.map((levelSet, idx) => {
        if(idx % 2 === 0) {
            // reversed
            for(let i=levelSet.length-1; i>=0; i--) {
                callback(levelSet[i]);
            }
        } else {
            // not reversed
            for(let i=0; i<levelSet.length; i++) {
                callback(levelSet[i]);
            }
        }
    })
}
export default zigZagQueues;
