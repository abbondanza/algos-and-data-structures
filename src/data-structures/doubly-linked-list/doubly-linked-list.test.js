import DoublyLinkedList from './doubly-linked-list';

test('size() of empty linked list should be 0', () => {
    const list = new DoublyLinkedList();
    expect(list.size()).toBe(0);
})

test('addFirst()', () => {
    const list = new DoublyLinkedList();
    list.addFirst('FIRST'); // FIRST
    expect(list.size()).toBe(1);
    expect(list.getFirst()).toBe('FIRST');
    expect(list.getLast()).toBe(list.getFirst());

    list.addFirst('SECOND'); // SECOND <-> FIRST
    expect(list.size()).toBe(2);
    expect(list.getFirst()).toBe('SECOND');
    expect(list.getLast()).toBe('FIRST');
})

test('addLast()', () => {
    const list = new DoublyLinkedList();
    list.addLast('LAST');  // LAST
    expect(list.size()).toBe(1);
    expect(list.getLast()).toBe('LAST');
    expect(list.getFirst()).toBe(list.getLast());

    list.addLast('LAST LAST');// LAST <-> LAST LAST
    expect(list.size()).toBe(2);
    expect(list.getLast()).toBe('LAST LAST');
    expect(list.getFirst()).toBe('LAST');
})

test('removeFirst()', () => {
    const list = new DoublyLinkedList();
    list.addLast('THREE') // THREE
    list.addLast('TWO'); // THREE <-> TWO
    list.addLast('ONE'); // THREE <-> TWO <-> ONE
    list.removeFirst(); // TWO <-> ONE

    expect(list.size()).toBe(2);
    expect(list.getFirst()).toBe('TWO');
    expect(list.getLast()).toBe('ONE');
})

test('removeLast()', () => {
    const list = new DoublyLinkedList();
    list.addFirst('ONE'); // ONE
    list.addFirst('TWO'); // TWO <-> ONE
    list.addFirst('THREE'); // THREE <-> TWO <-> ONE
    list.removeLast(); // THREE <-> TWO

    expect(list.size()).toBe(2);
    expect(list.getFirst()).toBe('THREE');
    expect(list.getLast()).toBe('TWO');
})
