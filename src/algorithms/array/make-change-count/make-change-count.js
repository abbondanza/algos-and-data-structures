/*
	Problem description:

	Given a set of coin values (denominations) and a target amount,
	return the number of ways we can make change.
*/
const makeChangeCount = (denominations, amount) => {
	// Create array to hold memizations of all values
	// from 0 - amount. ways[n] holds how many ways
	// we can make change for n amount.
	let ways = (new Array(amount + 1)).fill(0);

	// "base case": there is only 1 way to make 0
	ways[0] = 1;

	// loop through each coin amount
	for(let i=0; i<denominations.length; i++) {
		let coinAmt = denominations[i];

		// for each coin, start from coin all the way to amount
		// and add the values of:
			// 1) coin doesn't exists (ways[amt])
			// 2) previous amount with coin in denominations (ways[amt - coinAmt])
		for(let amt=coinAmt; amt<=amount; amt++) {
			ways[amt] = ways[amt] + ways[amt - coinAmt];
		}
	}

	return  ways[amount];
}

export default makeChangeCount;