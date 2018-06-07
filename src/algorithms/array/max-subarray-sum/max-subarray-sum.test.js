import maxSubarraySum from './max-subarray-sum';

test('maxSubarraySum() all positive', () => {
    const a = [0, 1, 2, 3, 4, 5];
    // should be sum of all
    expect(maxSubarraySum([0, 1, 2, 3, 4, 5])).toBe(15);
});

test('maxSubarraySum() alternating', () => {
    const a = [2, -3, 4, -1, -2, 1, 5, -3];
    //         2, -1, 4, 3 , 1 , 2, (7), 4
    expect(maxSubarraySum(a)).toBe(7);
});

test('maxSubarraySum() alternating', () => {
    const a = [48, -49, 51, -50, 100, -200];
    //         48, -1 , 51, 1  , (101), -99
    expect(maxSubarraySum(a)).toBe(101);
});


test('maxSubarraySum() all negative', () => {
    const a = [-2, -1, -20, -21, -5];
    // should be max element
    expect(maxSubarraySum(a)).toBe(-1);
});
