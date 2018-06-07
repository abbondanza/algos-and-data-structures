import Graph from '../../../data-structures/graph/graph';
import dfs from './dfs';

test('dfs() - directed', () => {
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
    const values = [];
    dfs(graph.getVertex('A'), (vertex)=> {
        values.push(vertex.value);
    });

    expect(values).toEqual(['A', 'C', 'D', 'B', 'E']);
})

test('dfs()', () => {
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
    const values = [];
    dfs(graph.getVertex('A'), (vertex)=> {
        values.push(vertex.value);
    });

    expect(values).toEqual(['A', 'C', 'D', 'B', 'E']);
})

