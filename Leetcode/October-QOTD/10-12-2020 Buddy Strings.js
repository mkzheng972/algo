var buddyStrings = function(A, B) {
    
    if (A.length !== B.length) {
        return false
    }
    if (A === B) {
        let set = new Set()
        for (let char of A) {
            set.add(char)
        }
        return set.size < A.length
    }
    let diff = []
    let a = -1
    let b = -1
    for (let i = 0; i < A.length; i++) {
        if (A[i] !== B[i]) {
            diff.push(i)
            if (a === -1) {
                a = i
            } else {
                b = i
            }
        }
    }
    return diff.length === 2 && A[a] === B[b] && A[b] === B[a]
};
