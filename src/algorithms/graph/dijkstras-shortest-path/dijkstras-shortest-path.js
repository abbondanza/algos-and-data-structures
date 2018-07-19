import bfs from '../bfs/bfs';
import PriorityQueue from '../../../data-structures/priority-queue/priority-queue';

const dijkstrasShortestPath = (src, dest) => {
	let dist = {};
	let vertices = {};

	// create priority queue
	// (a => 1 just means that it won't compare the values of two vertices with the same priority)
	let pq = new PriorityQueue(a => 1);

	// loop through all the vertices to instantiate maps
	// set distance to all vertices as Infinity
	bfs(src, (v) => {
		let vKey = v.key();
		vertices[vKey] = v;
		dist[vKey] = +Infinity;
		pq.insert(vKey, dist[vKey]);
	});
	// except source's
	dist[src.key()] = 0;

	//make sure to update its priority
	pq.changePriority(src.key(), 0);

	let visited = {};

	// BFS traversal, but using priority queue instead
	while(!pq.isEmpty()) {
		let vKey = pq.poll();
		let currVertex = vertices[vKey];
		visited[vKey] = true;

		// for each vertex, visit all its neighbors
		currVertex.edges.map((E) => {
			let destKey = E.end.key();
			// don't bother visiting it if it has already been visited
			if(visited[destKey]) return;

			// be greedy! the next one we want to visit is the one with the shortest path
			let distToNext = dist[vKey] + E.weight;
			// if we have found a shorter path to next vertex
			// then update priority queue
			if(distToNext < dist[destKey]) {
				dist[destKey] = distToNext;
				pq.changePriority(destKey, dist[destKey]);
			}
		});
	}

	// is there a way to exit sooner?
	return dist[dest.key()];
};

export default dijkstrasShortestPath;
