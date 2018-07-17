import isPalindrome from './palindrome';

test('isPalindrome - empty string - should be', () => {
	expect(isPalindrome('')).toBe(true);
})

test('isPalindrome - should not be', () => {
	expect(isPalindrome('rafael')).toBe(false);
})

test('isPalindrome - repetitive string - should be', () => {
	expect(isPalindrome('aaaaaa')).toBe(true);
})

test('isPalindrome - odd number of characters - should be', () => {
	expect(isPalindrome('abcdcba')).toBe(true);
})

test('isPalindrome - even number of characters - should be', () => {
	expect(isPalindrome('abracadabraarbadacarba')).toBe(true);
})