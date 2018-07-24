const threesum = (arr, n) => {

	for(let i=0; i<arr.length; i++) {
		let goal = n - arr[i];
		let dict = {};
		let sum3 = [arr[i]];
		// This is now a simpler 2-sum problem
		for(let j=0; j<arr.length; j++) {
			if(i === j) continue;
			if(dict[arr[j]]) {
				sum3.push(arr[j]);
				sum3.push(arr[dict[arr[j]]]);
				return sum3;
			}

			dict[goal - arr[j]] = j;
		}
	}
	return [];
}

export default threesum;