var hIndex = function(citations) {
    
    /*
    N papers have at least h citations
    N-h papers have less than or equal to h citations
    
    [3,0,6,1,5]
      0  1  2  3  4  5
    [ 1, 1, 0, 1, 0, 2 ]
    3 3
    
    two loops
    create a bucket that stores the count of individual num appearing in citations
    first loop thru the citations array
    if num is greater than citations length (N) then increment Nth index
    second loop starts at the end, loop backwards
    have a count variable that sums the values in the buckets array
    once we reached count >= i, end the loop return i
    */
    
    // 1. get all the count of each num in citations at each index
    
    let N = citations.length
    let buckets = new Array(N+1).fill(0)
    for (let num of citations) {
        if (num >= N) {
            buckets[N] += 1
        } else {
            buckets[num] += 1
        }
    }
    // 2. loop backwards and add onto count until its the same val as index
    let count = 0
    for (let i = N; i >= 0; i--) {
        count += buckets[i]
        if (count >= i) {
            return i
        }
    }
};
