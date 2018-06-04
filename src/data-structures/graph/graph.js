import GraphVertex from './graph-vertex';

const _defaultGetKey = (value) => {
    return value;
};

// Directed graph
export default class Graph {
    constructor(getKeyFn) {
        this.getKeyFn = getKeyFn || _defaultGetKey;
        this.vertices = {};
    }
    addEdge(v, w) {
        const V = this.getVertex(v);
        const W = this.getVertex(w);
        if(!V || !W) {
            return;
        }
        V.addEdge(W);
    }
    addVertex(v) {
        const V = new GraphVertex(v, this.getKeyFn);
        if(this.vertices[V.key()]) {
            return;
        }

        this.vertices[V.key()] = V;
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
        return V.hasEdge(W);
    }
    getVertices() {
        return Object.keys(this.vertices).map(this.getVertex.bind(this));
    }
    vertexCount() {
        return this.getVertices().length;
    }
}
