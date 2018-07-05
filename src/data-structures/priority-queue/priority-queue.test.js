import PriorityQueue from './priority-queue'

const valComparator = (a,b) => { return a - b };

test('isEmpty()', () => {
    const pq = new PriorityQueue();
    expect(pq.isEmpty()).toBe(true);
})


test('insert() should ensure that elements are added in order', () => {
    const pq = new PriorityQueue();
    pq.insert(9, 8);
    pq.insert(3, 4);
    pq.insert(8, 7);
    pq.insert(0, 9);
    pq.insert(1, 0);

    expect(pq.size()).toBe(5);
    expect(pq.peek()).toEqual(1);
    expect(pq.poll()).toEqual(1);
})

test.only('same priority should be polled based on their value comparison', () => {
    const pq = new PriorityQueue(valComparator);
    pq.insert(9, 8);
    pq.insert(8, 7);
    pq.insert(3, 0);
    pq.insert(2, 7);
    pq.insert(0, 9);
    pq.insert(1, 0);

    expect(pq.size()).toBe(6);

    expect(pq.poll()).toEqual(3);
    expect(pq.poll()).toEqual(1);
    expect(pq.poll()).toEqual(8);
    expect(pq.poll()).toEqual(2);
    expect(pq.poll()).toEqual(9);
    expect(pq.poll()).toEqual(0);
})

