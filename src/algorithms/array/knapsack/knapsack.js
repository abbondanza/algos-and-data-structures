const knapsackRecursive = (items, weightLimit, n) => {
    if(n < 0 || weightLimit === 0) {
        return 0;
    }

    let currItem = items[n];

    // if currentItem does not fit, then skip it
    if(currentItem.weight > weightLimit) {
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
    let K = k.map(() => {
        return new Array(weightLimit + 1).fill(0)
    });

    // row, col --> i, w
    for(let i=1; i<=items.length; i++) {
        for(let w=1; w<=weightLimit; w++) {
            // [i-1] because we are using a 1-index
            let currItem = items[i-1];
            // if current item fits into knapsack
            if(currItem.weight <= w) {
                // current cell
                K[i][w] = Math.max(
                    // IF item goes into knapsack
                    currItem.value + K[i-1][w-currItem.weight],
                    // IF item stays out
                    K[i-1][w]
                );
                continue;
            }
            // else, if item stays out
            K[i][w] = K[i-1][w];
        }
    }

    return K[items.length][weightLimit];
};


const knapsack = (items, weightLimit) => {
    return knapsackDynamic(items, weightLimit);
};

export default knapsack;
