const maxSubarraySum = (arr) => {
    let maxSum = -Infinity;
    let curr = -Infinity;
    arr.map((item) => {
        if(curr + item > item) {
            curr += item;
        } else {
            curr = item;
        }

        maxSum = Math.max(curr, maxSum);
    });

    return maxSum;
}

export default maxSubarraySum;