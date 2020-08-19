var numsSameConsecDiff = function(N, K) {
    const output = []
    function helper(arr, lastNum) {
        if (arr.length === N) {
            output.push(parseInt(arr.join('')))
            return
        }
        for (let i = 0; i <= 9; i++) {
            if (arr.length === 0) {     // first number; can be anything
                if (N === 1 || N !== 1 && i !== 0) {
                    arr.push(i)
                    helper(arr, i)
                    arr.pop()
                }
            } else {
                if (Math.abs(lastNum - i) === K) {
                    arr.push(i)
                    helper(arr, i)
                    arr.pop()
                }
            }
        }
    }
    helper([], 0)
    return output
};
