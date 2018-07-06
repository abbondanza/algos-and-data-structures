import Graph from '../../../data-structures/graph/graph';
import dijkstrasShortestPath from './dijkstras-shortest-path';

test('dijkstrasShortestPath()', () => {
	let graph = new Graph();
	graph.addEdge('A', 'B', 1);
	graph.addEdge('A', 'C', 3);

	graph.addEdge('B', 'C', 1);
	graph.addEdge('B', 'D', 5);

	graph.addEdge('C', 'D', 2);
	graph.addEdge('C', 'E', 3);

	graph.addEdge('D', 'E', 1);

	/*
		Graph:

		A --3-- C --3-- E
		|     / |     /
		1   1   2   1
		| /     | /
		B --5-- D
	*/

	expect(dijkstrasShortestPath(
		graph.getVertex('A'),
		graph.getVertex('E')
	)).toBe(5);

	expect(dijkstrasShortestPath(
		graph.getVertex('A'),
		graph.getVertex('C')
	)).toBe(2);

	expect(dijkstrasShortestPath(
		graph.getVertex('A'),
		graph.getVertex('D')
	)).toBe(4);

})

test('dijkstrasShortestPath()', () => {
	let graph = new Graph();
	graph.addEdge('A', 'C', 8);
	graph.addEdge('A', 'B', 1);

	graph.addEdge('B', 'D', 1);

	graph.addEdge('C', 'E', 8);

	graph.addEdge('D', 'E', 8);
	graph.addEdge('D', 'F', 9);

	graph.addEdge('E', 'F', 2);
	/*
		Graph:

		A --8-- C --8-- E 
		|             / |
		1           8   2
		|         /     |
		B --1-- D --9-- F
	*/

	expect(dijkstrasShortestPath(
		graph.getVertex('A'),
		graph.getVertex('E')
	)).toBe(10);

	expect(dijkstrasShortestPath(
		graph.getVertex('A'),
		graph.getVertex('F')
	)).toBe(11);
})


test('dijkstrasShortestPath() - non-greedy path', () => {
	let graph = new Graph();
	graph.addEdge('A', 'C', 1);
	graph.addEdge('A', 'B', 2);

	graph.addEdge('B', 'F', 1);

	graph.addEdge('F', 'E', 1);

	graph.addEdge('C', 'E', 9);
	/*
		Graph:

		A --1-- C --9-- E 
		|               |
		2               1
		|               |
		B ------1------ F
	*/

	expect(dijkstrasShortestPath(
		graph.getVertex('A'),
		graph.getVertex('E')
	)).toBe(4);
})
