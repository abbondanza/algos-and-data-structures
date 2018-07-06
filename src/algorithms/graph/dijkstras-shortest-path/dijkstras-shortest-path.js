import bfs from '../bfs/bfs';
import PriorityQueue from '../../../data-structures/priority-queue/priority-queue';

const dijkstrasShortestPath = (src, dest) => {
	let dist = {};
	let vertices = {};

	// loop through all the vertices to instantiate maps
	bfs(src, (v) => {
		let vKey = v.key();
		vertices[vKey] = v;
		dist[vKey] = +Infinity;
	});

	// create priority queue
	// (a => 1 just means that it won't compare the values of two vertices with the same priority)
	let pq = new PriorityQueue(a => 1);

	// set dist to src as 0 & insert it in priority queue
	dist[src.key()] = 0;
	pq.insert(src.key(), 0);
	let visited = {};

	// BFS traversal, but using priority queue instead
	while(!pq.isEmpty()) {
		let vKey = pq.poll();
		let currVertex = vertices[vKey];
		visited[vKey] = true;

		// for each vertex, visit all its neighbors
		for(let i = 0; i < currVertex.edges.length; i++) {
			let edge = currVertex.edges[i];
			let uKey = edge.end.key();
			// `continue` if visited already
			if(visited[uKey]) continue;

			// if the current path length is shorter than prev path length,
			// then update dist
			let currLen = dist[vKey] + edge.weight;
			if(currLen < dist[uKey]) {
				dist[uKey] = currLen;
				pq.insert(uKey, currLen);
			}
		}
	}

	// is there a way to exit sooner?
	return dist[dest.key()];
};

export default dijkstrasShortestPath;
