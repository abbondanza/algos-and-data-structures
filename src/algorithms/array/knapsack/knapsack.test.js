import knapsack from './knapsack';

test('knapsack() - simple', () => {
    let items = [{
        value: 60,
        weight: 10
    }, {
        value: 100,
        weight: 20
    }, {
        value: 120,
        weight: 30
    }];

    let knapsackLimit = 50;

    expect(knapsack(items, knapsackLimit)).toBe(220)
})

test('knapsack() - more complex', () => {
    let items = [{
        value: 60,
        weight: 65
    }, {
        value: 120,
        weight: 160
    }, {
        value: 100,
        weight: 200
    }, {
        value: 10,
        weight: 60
    }, {
        value: 80,
        weight: 135
    }, {
        value: 55,
        weight: 100
    }, {
        value: 150,
        weight: 300
    }];

    let knapsackLimit = 360;

    expect(knapsack(items, knapsackLimit)).toBe(260)
})
