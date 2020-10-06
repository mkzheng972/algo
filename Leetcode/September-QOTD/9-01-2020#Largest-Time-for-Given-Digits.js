var largestTimeFromDigits = function(A) {
    let output = []
    
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (j === i) {
                continue
            }
            for (let k = 0; k < 4; k++) {
                if (k === i || k === j) {
                    continue
                }
                for (let l = 0; l < 4; l++) {
                    if (l === i || l === j || l === k) {
                        continue
                    }
                    if (`${A[i]}${A[j]}` < 24 && `${A[k]}${A[l]}` < 60) {
                        output.push(`${A[i]}${A[j]}:${A[k]}${A[l]}`)
                    }
                }
            }
        }
    }
    output.sort((a,b) => a < b ? 1 : -1)
    return output[0] ? output[0] : ''
};
