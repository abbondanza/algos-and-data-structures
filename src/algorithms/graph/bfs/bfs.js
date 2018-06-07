const bfs = (vertex, callback) => {
    const visited = {};
    let q = [vertex];
    while(q.length) {
        let curr = q.shift();
        visited[curr.key()] = true;
        callback(curr);
        curr.edges.forEach((edge)=>{
            if(!visited[edge.end.key()]) {
                q.push(edge.end);
            }
        });
    }
}

export default bfs;
