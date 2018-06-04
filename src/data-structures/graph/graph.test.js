import Graph from './graph';

test('vertexCount() on empty graph', () => {
    const graph = new Graph();
    expect(graph.vertexCount()).toBe(0);
})

test('addVertex()', () => {
    const graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    expect(graph.vertexCount()).toBe(2);
    expect(graph.hasVertex('A')).toBe(true);
    expect(graph.hasVertex('B')).toBe(true);
})

test('addEdge()', () => {
    const graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addEdge('A', 'B');
    expect(graph.vertexCount()).toBe(2);
    expect(graph.hasEdge('A', 'B')).toBe(true);
    expect(graph.hasEdge('B', 'A')).toBe(false);
})

test('addEdge()', () => {
    const graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addEdge('A', 'B');
    expect(graph.vertexCount()).toBe(2);
    expect(graph.hasEdge('A', 'B')).toBe(true);
    expect(graph.hasEdge('B', 'A')).toBe(false);
})
