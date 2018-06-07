const maxSubarraySum = (a) => {
    let globalMax = -Infinity;
    let upToHereMax = 0;
    for(let i=0; i<a.length; i++) {
        if(upToHereMax + a[i] > a[i]) {
            upToHereMax += a[i];
        } else {
            upToHereMax = a[i];
        }

        globalMax = Math.max(upToHereMax, globalMax);
    }

    return globalMax;
}

export default maxSubarraySum;
