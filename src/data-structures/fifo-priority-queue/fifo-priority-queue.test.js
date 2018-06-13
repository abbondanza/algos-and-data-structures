import FifoPriorityQueue from './fifo-priority-queue'

test('isEmpty()', () => {
    const pq = new FifoPriorityQueue();
    expect(pq.isEmpty()).toBe(true);
})


test('insert() should ensure that elements are added in order', () => {
    const pq = new FifoPriorityQueue();
    pq.insert({ value: 9 }, 8);
    pq.insert({ value: 3 }, 4);
    pq.insert({ value: 8 }, 7);
    pq.insert({ value: 0 }, 9);
    pq.insert({ value: 1 }, 0);

    expect(pq.size()).toBe(5);
    expect(pq.peek()).toEqual({ value: 1});
    expect(pq.poll()).toEqual({ value: 1});
})

test('same priority items should be polled in FIFO order', () => {
    const pq = new FifoPriorityQueue();
    pq.insert({ value: 9 }, 8);
    pq.insert({ value: 8 }, 7);
    pq.insert({ value: 3 }, 4);
    pq.insert({ value: 2 }, 7);
    pq.insert({ value: 0 }, 9);
    pq.insert({ value: 1 }, 0);
    pq.insert({ value: 3 }, 7);


    expect(pq.size()).toBe(7);
    expect(pq.poll()).toEqual({ value: 1});
    expect(pq.poll()).toEqual({ value: 3});
    expect(pq.poll()).toEqual({ value: 8});
    expect(pq.poll()).toEqual({ value: 2});
    expect(pq.poll()).toEqual({ value: 3});
    expect(pq.poll()).toEqual({ value: 9});
    expect(pq.poll()).toEqual({ value: 0});
})

