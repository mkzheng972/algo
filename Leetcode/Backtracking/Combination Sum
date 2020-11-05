var combinationSum = function(candidates, target) {
    
    /*
    
    backtracking
    
    */
    let output = []
    
    function backtrack(startIdx, currSum, path) {
        if (currSum > target) {
            return
        }
        if (currSum === target) {
            output.push(path.slice())
            return
        }
        for (let i = startIdx; i < candidates.length; i++) {
            let currNum = candidates[i]
            path.push(currNum)
            backtrack(i, currSum + currNum, path)
            path.pop()
        }
    }
    backtrack(0, 0, [])
    return output
};
