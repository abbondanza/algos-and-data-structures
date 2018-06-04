export default class GraphVertex {
    constructor(value, getKeyFn) {
        this.adjacent = []; // or {}?
        this.value = value;
        this.getKeyFn = getKeyFn || _defaultGetKey;
    }

    key() {
        return this.getKeyFn(this.value);
    }

    addEdge(V) {
        this.adjacent.push(V);
    }

    hasEdge(V) {
        return !!this.adjacent.filter((I)=>{
            return V.key() === I.key();
        }).length;
    }

}
