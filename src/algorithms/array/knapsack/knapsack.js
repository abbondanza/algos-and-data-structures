/*
    Problem Description:

    Given a list of items ({ weight, value }) and a knapsack
    weightLimit, calculate maximum sum of values in knapsack
    whose total weights are less or equal to weightLimit.
*/

const knapsackRecursive = (items, weightLimit, n) => {
    if(n < 0 || weightLimit === 0) {
        return 0;
    }

    let currItem = items[n];

    // if currItem does not fit, then skip it
    if(currItem.weight > weightLimit) {
        return knapsackRecursive(items, weightLimit, n-1);
    }

    // if current item DOES fit, find max knapsack value if:
    //      1) current item is inserted (knapsack val increases, total weight decreases)
    //      2) current item is NOT inserted (skip item)
    return Math.max(
        currItem.value + knapsackRecursive(items, weightLimit - currItem.weight, n-1),
        knapsackRecursive(items, weightLimit, n-1)
    )
};

const knapsackDynamic = (items, weightLimit) => {
    let k = new Array(items.length + 1).fill(null);

    // K: Matrix that will hold bottom-up memoization
    // of subsequent knapsackDynamic calls
    let K = k.map(() => {
        return new Array(weightLimit + 1).fill(0)
    });

    // Iterate through rows and columns to fill K matrix.
    // K[r][c] holds max knapsack value for subproblem
    // where r = items.length and c = weightLimit.
    for(let row=1; row<=items.length; row++) {
        for(let currLimit=1; currLimit<=weightLimit; currLimit++) {
            let currItem = items[row-1];
            let cellVal = 0;
            // Current item *certainly* does not fit into knapsack
            // Skip it and copy value from cell to the the top.
            if(currItem.weight > currLimit) {
                cellVal = K[row-1][currLimit];
            } else { // Current item *might* fit into knapsack
                // Maximize current cell value by finding max
                // between cases:
                //      1) item goes into knapsack
                //      2) item stays out of knapsack
                cellVal = Math.max(
                    currItem.value + K[row-1][currLimit-currItem.weight],
                    K[row-1][currLimit]
                );
            }

            K[row][currLimit] = cellVal;
        }
    }

    return K[items.length][weightLimit];
};


const knapsack = knapsackDynamic;

export default knapsack;
