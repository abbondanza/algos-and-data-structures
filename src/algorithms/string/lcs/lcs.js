// Find the Longest Common Subquence of 2 strings

const lcs = (a, b) => {
    let dict = {};
    for(let i=0; i<a.length; i++) {
        dict[a.charAt(i)] = i;
    }

    let longestSubsequence = '';
    for(let i=0; i<b.length; i++) {
        let currSubsequence = '';
        let currPos = -1;
        for(let j=i; j<b.length; j++) {
            let chPos = dict[b.charAt(j)];
            if(chPos !== void 0 && chPos > currPos) {
                currPos = chPos;
                currSubsequence += b.charAt(j);
            }
        }
        if(currSubsequence.length > longestSubsequence.length) {
            longestSubsequence = currSubsequence;
        }
    }
    return longestSubsequence;
}

export default lcs;
