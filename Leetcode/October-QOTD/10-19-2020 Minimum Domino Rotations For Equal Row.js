var minDominoRotations = function(A, B) {
    
    
//     check if there is a same number that exists vertically across the rows
//     if there is then answer = (row.length - larger side count of num)
//     if there isnt then return - 1
    
    let n = A.length
    let mapA = {}
    let mapB = {}
    let max = -1
    for (let i = 0; i < A.length; i++) {
        let numA = A[i]
        let numB = B[i]
        if (mapA[numA] === undefined) {
            mapA[numA] = new Set()
        }
        if (mapB[numB] === undefined) {
            mapB[numB] = new Set()
        }
        mapA[numA].add(i)
        mapB[numB].add(i)
    }
    // console.log(mapA)
    // console.log(mapB)
    for (let key in mapA) {
        if (mapA[key] && mapA[key].size === n) {
            return 0
        } else if (mapB[key] && mapB[key].size === n) {
            return 0
        } else if (mapA[key] && mapB[key]) {
            let newSet = new Set([...mapA[key], ...mapB[key]])
            if (newSet.size === n) {
                max = Math.max(mapA[key].size, mapB[key].size, max)
            }
        }
    }
    if (max === -1) {
        return max
    }
    return n - max
};
