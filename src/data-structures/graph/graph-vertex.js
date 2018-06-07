export default class GraphVertex {
    constructor(value, getKeyFn) {
        this.edges = [];
        this.value = value;
        this.getKeyFn = getKeyFn || _defaultGetKey;
    }

    key() {
        return this.getKeyFn(this.value);
    }

    addEdge(V) {
        this.edges.push(V);
    }

    hasEdgeTo(V) {
        return !!this.edges.filter((edge)=>{
            return V.key() === edge.end.key();
        }).length;
    }

}
