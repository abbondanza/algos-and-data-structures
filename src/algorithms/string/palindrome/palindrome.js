const isPalindrome = (str) => {
	let start = 0;
	let end = str.length - 1;

	while (start < end) {
		if(str.charAt(start) !== str.charAt(end)) {
			return false;
		}
		start++;
		end--;
	}
	return true;
}

export default isPalindrome;