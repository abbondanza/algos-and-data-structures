import Graph from '../../../data-structures/graph/graph';
import bfs from './bfs';

test('bfs()', () => {
    const graph = new Graph();
    graph.addVertex('A');
    /*
        A -> []
    */
    graph.addVertex('B');
    /*
        A -> []
        B -> []
    */
    graph.addVertex('C');
    /*
        A -> []
        B -> []
        C -> []
    */
    graph.addVertex('D');
    /*
        A -> []
        B -> []
        C -> []
        D -> []
    */
    graph.addVertex('E');
    /*
        A -> []
        B -> []
        C -> []
        D -> []
        E -> []
    */

    graph.addEdge('A', 'C');
    /*
        A -> [C]
        B -> []
        C -> []
        D -> []
        E -> []
    */
    graph.addEdge('A', 'D');
    /*
        A -> [C, D]
        B -> []
        C -> []
        D -> []
        E -> []
    */

    graph.addEdge('B', 'E');
    /*
        A -> [C, D]
        B -> [E]
        C -> []
        D -> []
        E -> []
    */
    graph.addEdge('D', 'B');
    /*
        A -> [C, D]
        B -> [E]
        C -> []
        D -> [B]
        E -> []
    */

    graph.addEdge('C', 'A');
    /*
        A -> [C, D]
        B -> [E]
        C -> [A]
        D -> [B]
        E -> []
    */
    graph.addEdge('C', 'E');
    /*
        A -> [C, D]
        B -> [E]
        C -> [A, E]
        D -> [B]
        E -> []
    */
    graph.addEdge('E', 'A');
    /*
        A -> [C, D]
        B -> [E]
        C -> [A, E]
        D -> [B]
        E -> [B]
    */

    const traversal = [];
    bfs(graph.getVertex('A'), (vertex)=> {
        traversal.push(vertex);
    });
    const values = traversal.map((v)=>v.value);

    expect(values).toEqual(['A', 'C', 'D', 'E', 'B']);
})



