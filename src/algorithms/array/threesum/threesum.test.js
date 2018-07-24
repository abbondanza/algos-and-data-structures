import threesum from './threesum';

test('threesum()', () => {
	let arr = [3, 0, 1, 6, 5, 1];
	let n = 5;

	expect(threesum(arr, n).sort()).toEqual([1, 1, 3]);
})

test('threesum() - no solution', () => {
	let arr = [3, 0, 1, 6, 5, 6];
	let n = 5;

	expect(threesum(arr, n)).toEqual([]);
})


test('threesum() - multiple solutions', () => {
	let arr = [3, 2, 1, -1, 6, 5, 6, 0, 1];
	let n = 5;

	let result = threesum(arr, n);
	let sum = result.reduce((agg, item) => {
		agg += item;
		return agg;
	}, 0)
	expect(result.length).toBe(3);
	expect(sum).toBe(n);
})