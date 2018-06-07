export default class GraphVertex {
    constructor(value, getKeyFn) {
        this.edges = [];
        this.value = value;
        this.getKeyFn = getKeyFn || _defaultGetKey;
    }

    key() {
        return this.getKeyFn(this.value);
    }

    addEdge(E) {
        this.edges.push(E);
    }

    hasEdgeTo(V) {
        return !!this.edges.filter((edge)=>{
            return V.key() === edge.end.key();
        }).length;
    }

}
