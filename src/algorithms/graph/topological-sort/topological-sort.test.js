import Graph from '../../../data-structures/graph/graph';
import topologicalSort from './topological-sort';

test('topologicalSort()', () => {
    let dag = new Graph(true);

    dag.addEdge('B', 'C');
    dag.addEdge('A', 'C');
    dag.addEdge('F', 'D');
    dag.addEdge('B', 'D');
    dag.addEdge('D', 'C');
    dag.addEdge('C', 'E');
    dag.addEdge('A', 'B');

    let topSort = topologicalSort(dag);

    expect(topSort.indexOf('A') < topSort.indexOf('B')).toBe(true);
    expect(topSort.indexOf('A') < topSort.indexOf('C')).toBe(true);
    expect(topSort.indexOf('B') < topSort.indexOf('C')).toBe(true);
    expect(topSort.indexOf('B') < topSort.indexOf('D')).toBe(true);
    expect(topSort.indexOf('D') < topSort.indexOf('C')).toBe(true);
    expect(topSort.indexOf('C') < topSort.indexOf('E')).toBe(true);
    expect(topSort.indexOf('F') < topSort.indexOf('D')).toBe(true);
})
