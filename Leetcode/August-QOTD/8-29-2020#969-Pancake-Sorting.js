var pancakeSort = function(A) {
    /*
    flip when its the highest num
    [3,2,4,1]
    4,2,3,1
    1,3,2,4
    3,1,2,4
    2,1,3,4
    1,2,3,4
    
    when we reached A[i] == n, flip the array
    once the high number is at its correct index, we decrement n and continue
    */
    
    let n = A.length
    let output = []
    while (n > 0) {
        let index = -1
        for (let i = 0; i < A.length; i++) {
            if (A[i] === n) {
                if (i+1 === n) {
                    n -= 1
                } else {
                    index = i
                    if (index === 0) {
                        output.push(n)
                    } else {
                        output.push(index+1)
                    }
                }
                break;
            }
        }
        if (index === 0) {
            A = A.slice(0,n).reverse()
        } else {
            A = A.slice(0,index+1).reverse().concat(A.slice(index+1))
        }
    }
    return output
};
