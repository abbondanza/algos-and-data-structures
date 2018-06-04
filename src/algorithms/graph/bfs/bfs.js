const bfs = (vertex, callback) => {
    const visited = {};
    let q = [vertex];
    while(q.length) {
        let curr = q.shift();
        visited[curr.key()] = true;
        callback(curr);
        curr.adjacent.forEach((v)=>{
            if(!visited[v.key()]) {
                q.push(v);
            }
        });
    }
}

export default bfs;
