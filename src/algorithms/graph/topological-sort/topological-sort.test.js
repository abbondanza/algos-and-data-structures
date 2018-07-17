import Graph from '../../../data-structures/graph/graph';
import topologicalSort from './topological-sort';

test('topologicalSort()', () => {

	let dag = new Graph(true);
	/*
		A ---> B ---> C ---> D
		\	   ^      ^
		 \	  /      /
		  \  /      /
		   >E ---> F <--- G
		  
	*/
	dag.addEdge('E', 'F');
	dag.addEdge('G', 'F');
	dag.addEdge('E', 'B');
	dag.addEdge('C', 'D');
	dag.addEdge('F', 'C');
	dag.addEdge('A', 'B');
	dag.addEdge('B', 'C');
	dag.addEdge('A', 'E');

	let topSort = topologicalSort(dag);

	expect(topSort.indexOf('A') < topSort.indexOf('B')).toBe(true);
	expect(topSort.indexOf('A') < topSort.indexOf('E')).toBe(true);
	expect(topSort.indexOf('B') < topSort.indexOf('C')).toBe(true);
	expect(topSort.indexOf('E') < topSort.indexOf('B')).toBe(true);
	expect(topSort.indexOf('E') < topSort.indexOf('F')).toBe(true);
	expect(topSort.indexOf('C') < topSort.indexOf('D')).toBe(true);
	expect(topSort.indexOf('G') < topSort.indexOf('F')).toBe(true);
})