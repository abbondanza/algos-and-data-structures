import Graph from '../../../data-structures/graph/graph';
import dijkstrasShortestPath from './dijkstras-shortest-path';

test('dijkstrasShortestPath()', () => {
	let graph = new Graph();
	graph.addEdge('A', 'B', 1);
	graph.addEdge('A', 'C', 3);

	graph.addEdge('B', 'C', 1);
	graph.addEdge('B', 'D', 5);

	graph.addEdge('C', 'D', 1);
	graph.addEdge('C', 'E', 1);
	graph.addEdge('D', 'E', 1);

	expect(dijkstrasShortestPath('A', 'E')).toBe(6);
	expect(dijkstrasShortestPath('A', 'C')).toBe(2);
	expect(dijkstrasShortestPath('A', 'D')).toBe(4);

})