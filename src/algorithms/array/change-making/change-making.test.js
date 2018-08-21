import changeMaking from './change-making';

test('changeMaking()', () => {
    let denominations = [1, 5, 25];
    let amount = 32;
    // [25, 5, 1, 1] -> 4 coins
    expect(makeChangeCount(denominations, amount)).toBe(4);
})

test('changeMaking()', () => {
    let denominations = [1, 5, 25];
    let amount = 50;
    // [25, 25] -> 2 coins
    expect(makeChangeCount(denominations, amount)).toBe(2);
})

test('changeMaking()', () => {
    let denominations = [1, 5, 25];
    let amount = 6;
    // [5, 1] -> 2 coins
    expect(makeChangeCount(denominations, amount)).toBe(2);
})

/*

	[1, 5, 7]
	[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

	[1, 5]
	[0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2]
	[0, 1, 2, 3, 4, 1, 2, 3, 4, 5, 2]

	[1, 5, 7]
	[0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0]
	[0, 1, 2, 3, 4, 1, 2, 1, 2, 3, 2]


*/
