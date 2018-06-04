const dfsHelper = (vertex, callback, visited) => {
    visited[vertex.key()] = true;
    callback(vertex);
    vertex.adjacent.forEach((v) => {
        if(visited[v.key()]) {
            return;
        }
        dfsHelper(v, callback, visited);
    });
}

const dfs = (vertex, callback) => {
    return dfsHelper(vertex, callback, {});
}


export default dfs;
