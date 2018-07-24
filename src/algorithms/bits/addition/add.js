const add = (a, b) => {
	// Assumes that a and b are 32-bit signed non-negative ints
	while(b != 0) {
		let carry = a & b;
		a = a ^ b;
		b = carry << 1;
	}

	return a;
}

export default add;