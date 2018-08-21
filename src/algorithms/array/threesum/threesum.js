/*
	Problem description:

	Given an array (arr), find three elements in
	array that add up to given n.
*/
const threesum = (arr, sum) => {

	for(let i=0; i<arr.length; i++) {
		// the goal is now to find a pair in
		// rest of array that adds to target
		// ~ we can do that in O(n) ~
		let target = sum - arr[i];
		let diffs = {};
		for(let j=0; j<arr.length; j++) {
			if(j === i) continue;
			if(diffs[arr[j]] !== void 0) {
				return [arr[i], arr[j], arr[diffs[arr[j]]]];
			}

			diffs[target - arr[j]] = j;
		}
	}

	return [];

};

export default threesum;