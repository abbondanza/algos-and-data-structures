const editDistance = (a, b) => {
	// build Matrix of size [a.length][b.length]
	// fill Matrix with 0s
	let A = a.length + 1;
	let B = b.length + 1;

	let M = new Array(A).fill(null); // rows
	M = M.map(row => new Array(B).fill(0)); // cols

	for(let row=0; row<A; row++) {
		for(let col=0; col<B; col++) {
			// first row should be edit distance from '' -> b[i] where i=0 -> b.length-1
			// first col should be edit distance from '' -> a[i] where i=0 -> a.length-1
			if(row === 0 && col === 0) {
				M[row][col] = 0;
				continue;
			}

			if(row===0) {
				M[row][col] = col;
				continue;
			}

			if(col===0) {
				M[row][col] = row;
				continue;
			}

			if(row === col) {
				if(a.charAt(row-1) === b.charAt(col-1)) {
					M[row][col] = M[row-1][col-1];
				} else {
					M[row][col] = M[row-1][col-1] + 1;
				}
			} else {
				M[row][col] = Math.min(M[row-1][col], M[row][col-1]) + 1;
			}
		}
	}

	return M[a.length][b.length];
};

export default editDistance;