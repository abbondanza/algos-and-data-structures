/*
    Problem description:

    Given an array (arr) of numbers, find the
    max sum of contiguous elements in array.
*/

const maxSubarraySum = (arr) => {
    let maxSum = -Infinity;
    let currSum = -Infinity;

    for(let i=0; i<arr.length; i++) {
        let item = arr[i];
        // if existing sum + current item
        // increases existing sum, then add
        // it to existing sum
        if(currSum + item > item) {
            currSum += item;
        }
        // if current item is better off alone...
        else {
            currSum = item;
        }

        maxSum = Math.max(currSum, maxSum);
    }

    return maxSum;
}

export default maxSubarraySum;