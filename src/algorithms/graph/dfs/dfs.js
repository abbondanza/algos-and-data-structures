const dfsHelper = (vertex, callback, visited) => {
    visited[vertex.key()] = true;
    callback(vertex);
    vertex.edges.forEach((e) => {
        if(visited[e.end.key()]) {
            return;
        }
        dfsHelper(e.end, callback, visited);
    });
}

const dfs = (vertex, callback) => {
    return dfsHelper(vertex, callback, {});
}


export default dfs;
