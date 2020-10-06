var combinationSum3 = function(k, n) {
    
    /*
    goal: get all combinations of k length that sums up to target n
    
    intuition:
    
    backtrack
    loop from 1 to 9
    have a currSum counter to track the sum at current specific instance
    have an temp arr to store the numbers being tracked
    push temp arr into output arr if length is k and sum is n
    */
    const output = []
    function backtrack(start, temp, currSum) {
        // if (temp.length > k) return // not required to pass
        if (currSum === n && temp.length === k) {
            output.push(temp.slice())
            return
        } else {
            for (let i = start; i <= 9; i++) {
                if (currSum + i <= n) {
                    temp.push(i)
                    backtrack(i+1, temp, currSum + i)
                    temp.pop()
                }
            }
        }
    }
    backtrack(1, [], 0)
    return output
};
