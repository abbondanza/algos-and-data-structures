import Graph from '../../../data-structures/graph/graph';
import bfs from './bfs';

test('bfs() - directed', () => {
    const graph = new Graph(true);
    graph.addEdge('A', 'C');
    /*
        A -> [C]
        C -> []
    */
    graph.addEdge('A', 'D');
    /*
        A -> [C, D]
        C -> []
        D -> []
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
    graph.addEdge('B', 'C');
    /*
        A -> [C, D]
        B -> [E, C]
        C -> []
        D -> [B]
        E -> []
    */
    const traversal = [];
    bfs(graph.getVertex('A'), (vertex)=> {
        traversal.push(vertex);
    });
    const values = traversal.map((v)=>v.value);

    expect(values).toEqual(['A', 'C', 'D', 'B', 'E']);
})

test('bfs()', () => {
    const graph = new Graph();
    graph.addEdge('A', 'C');
    /*
        A -> [C]
        C -> [A]
    */
    graph.addEdge('A', 'D');
    /*
        A -> [C, D]
        C -> [A]
        D -> [A]
    */

    graph.addEdge('B', 'E');
    /*
        A -> [C, D]
        B -> [E]
        C -> [A]
        D -> [A]
        E -> [B]
    */
    graph.addEdge('D', 'B');
    /*
        A -> [C, D]
        B -> [E, D]
        C -> [A]
        D -> [A, B]
        E -> [B]
    */

    const traversal = [];
    bfs(graph.getVertex('A'), (vertex)=> {
        traversal.push(vertex);
    });
    const values = traversal.map((v)=>v.value);

    expect(values).toEqual(['A', 'C', 'D', 'B', 'E']);
})
