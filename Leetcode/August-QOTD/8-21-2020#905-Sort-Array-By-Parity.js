var sortArrayByParity = function(A) {
    
    /*
    goal: return new array with even then odd order nums
    
    A:
    create two arrays: one for even nums and one for odd nums
    loop thru the input array
    check num is even or odd
    push num into corresponding arrays
    merge arrays together for output
    */
    
    const even = []
    const odd = []
    for (let num of A) {
        if (num % 2 === 0) {    // even
            even.push(num)
        } else {        // odd
            odd.push(num)
        }
    }
    return even.concat(odd)
};
