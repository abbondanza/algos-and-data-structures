import lcs from './lcs';

test('lcs() - general case', () => {
    expect(lcs('ABCDGHEQ', 'EQADFHR')).toBe('ADH');
})

test('lcs() - disjoint', () => {
    expect(lcs('ABCDEF', 'GHIJKL')).toBe('');
})

test('lcs() - same string', () => {
    expect(lcs('ABCDEF', 'ABCDEF')).toBe('ABCDEF');
})

test('lcs() - general case', () => {
    expect(lcs('ABCDGHE', 'CDGQZ')).toBe('CDG');
})
