var partitionLabels = function(S) {
    
    let map = {}
    for (let i = 0; i < S.length; i++) {
        map[S[i]] = i
    }
    let output = []
    let lastIndex = 0
    let exists = new Map()
    for (let j = 0; j < S.length; j++) {
        if (map[S[j]] === j) {
            exists.delete(S[j])
        } else {
            exists.set(S[j], true)
        }
        if (exists.size === 0) {
            output.push(j+1 - lastIndex)
            lastIndex = j + 1
        }
    }
    return output
};
