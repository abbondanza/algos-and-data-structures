import DoublyLinkedList from '../doubly-linked-list/doubly-linked-list';

export default class Stack {
    constructor() {
        this.list = new DoublyLinkedList();
    }
    pop() {
        let item = this.list.getLast();
        this.list.removeLast();
        return item;
    }
    push(item) {
        this.list.addLast(item);
    }
    peek() {
        return this.list.getLast();
    }
    size() {
        return this.list.size();
    }

    asArray() {
        return this.list.asArray();
    }
}
