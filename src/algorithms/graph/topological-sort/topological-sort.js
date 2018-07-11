const topologicalSort = (graph) => {
    let adjacencyMap = graph.vertices;

    let visited = Object.keys(adjacencyMap).reduce((acc, item) => {
        acc[item] = false;
        return acc;
    }, {});

    for(let key in adjacencyMap) {
        adjacencyMap[key].edges.map((edge) => {
            visited[edge.end.key()] = true;
        })
    }

    let roots = [];
    for(let key in visited) {
        if(!visited[key]) roots.push(key);
    }

    let sorted = [];
    let removed = {};
    let stack = roots;

    while(stack.length) {
        let curr = stack.pop();
        sorted.push(curr);
        let currV = graph.getVertex(curr);
        currV.edges.map((vKey) => {
            removed[vKey] = true;
            if(!removed[vKey]) stack.push(vKey);
        })
    }
    // find all 'root' nodes
    //
    // create list
    // visited
    // for each root
    //      add to stack
    //      do dfs, push to stack

    // return reversed list
    return ['A', 'B'];
};

export default topologicalSort;
