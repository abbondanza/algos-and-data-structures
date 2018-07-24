// Find the Longest Common Subquence of 2 strings

const lcs = (a, b) => {
    // build matrix
    let L = new Array(a.length).fill(null);
    L = L.map(item => new Array(b.length).fill(null));

    for(let i=0; i<a.length; i++) {
        for(let j=0; j<b.length; j++) {
            if(a.charAt(i) === b.charAt(j)) {
                let prevDiagonal;
                if(!i || !j) {
                    prevDiagonal = 0
                } else {
                    prevDiagonal = L[i-1][j-1];
                }

                L[i][j] = prevDiagonal + 1;
            } else {
                let leftCell, topCell;
                if(!j) {
                    leftCell = 0;
                } else {
                    leftCell = L[i][j-1];
                }

                if(!i) {
                    topCell = 0;
                } else {
                    topCell = L[i-1][j];
                }

                L[i][j] = Math.max(topCell, leftCell);
            }
        }
    }

    // longest.length = L[a.length-1][b.length];

    let r = a.length - 1;
    let c = b.length - 1;

    let longestSubsequence = '';
    while(r >= 0 && c >= 0) {
        if(a.charAt(r) === b.charAt(c)) {
            longestSubsequence = a.charAt(r) + longestSubsequence;
            r--;
            c--;
        } else {
            let leftCell, topCell;
            if(!r) {
                topCell = 0;
            } else {
                topCell = L[r-1][c];
            }

            if(!c) {
                leftCell = 0;
            } else {
                leftCell = L[r][c-1];
            }

            if(leftCell > topCell) {
                c--;
            } else {
                r--;
            }
        }
    }

    return longestSubsequence;
}

export default lcs;
