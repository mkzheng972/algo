var findNumberOfLIS = function(nums) {
    
    let n = nums.length
    let output = 0
    
    let len = new Array(n).fill(1)
    let count = new Array(n).fill(1)
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                if (len[i] <= len[j]) {
                    len[i] = len[j] + 1
                    count[i] = count[j]
                } else if (len[i] === len[j] + 1) {
                    count[i] += count[j]
                }
            }
        }
    }
    let longest = Math.max(...len)
    for (let i = 0; i < n; i++) {
        if (len[i] === longest) {
            output += count[i]
        }
    }
    
    return output
};
