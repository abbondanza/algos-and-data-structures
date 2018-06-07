export default class GraphEdge {
    constructor(start, end, weight) {
        this.start = start;
        this.end = end;
        this.weight = weight || 1;
    }

    key() {
        return `${this.start.key()}__${this.end.key()}`;
    }
}
