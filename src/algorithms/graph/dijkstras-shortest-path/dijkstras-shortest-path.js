import bfs from '../bfs/bfs';
import Queue from '../../../data-structures/queue/queue';

const dijkstrasShortestPath = (src, dest) => {
	// get list of all vertices
	let dist = {};
	let prev = {};
	let visited = {};
	let vertices = [];
	bfs(src, (v) => {
		vertices.push(v);
		dist[v.key()] = +Infinity;
		prev[v.key()] = null;
		visited[v.key()] = false;
	});

	dist[src.key()] = 0;
	let Q = new Queue();
	Q.enqueue(src);

	while(!Q.isEmpty()) {
		// for each neighbor, update dist & visited if needed
		let vertex = Q.dequeue();
		visited[vertex.key()] = true;
		vertex.edges.map((edge) => {
			let eKey = edge.end.key();
			if(edge.weight < dist[eKey]) {
				dist[eKey] = edge.weight;
				prev[eKey] = vertex;
			}
			Q.enqueue(edge.end);
		})
	}
	return 0;
};

export default dijkstrasShortestPath;
