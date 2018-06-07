import GraphVertex from './graph-vertex';
import GraphEdge from './graph-edge';

const _defaultGetKey = (value) => {
    return value;
};

// Directed graph
export default class Graph {
    constructor(directed, getKeyFn) {
        this.getKeyFn = getKeyFn || _defaultGetKey;
        this.vertices = {};
        this.directed = directed || false;
    }
    addEdge(v, w, weight) {
        if(!this.getVertex(v)) {
            this.addVertex(v);
        }
        if(!this.getVertex(w)) {
            this.addVertex(w);
        }

        const V = this.getVertex(v);
        const W = this.getVertex(w);
        V.addEdge(new GraphEdge(V, W, weight));
        if(!this.directed) {
            W.addEdge(new GraphEdge(W, V, weight));
        }
    }
    addVertex(v) {
        const V = new GraphVertex(v, this.getKeyFn);
        if(this.vertices[V.key()]) {
            return;
        }

        this.vertices[V.key()] = V;
        return V;
    }
    getVertex(v) {
        return this.vertices[this.getKeyFn(v)] || null;
    }
    hasVertex(v) {
        return !!this.getVertex(v);
    }
    hasEdge(v, w) {
        const V = this.getVertex(v);
        const W = this.getVertex(w);
        if(!V || !W) {
            return false;
        }
        return V.hasEdgeTo(W);
    }
    getVertices() {
        return Object.keys(this.vertices).map(this.getVertex.bind(this));
    }
    vertexCount() {
        return this.getVertices().length;
    }
}
