var lengthOfLIS = function(nums) {
    
    /*
    DP
    
    A:
    create a dp array of nums.length
    fill the array with 1 since each num is its own subsequence of length 1
    
    have a nested for loop
    the first loop goes from 0 -> nums.length
    at each iteration have counter for longest length..
    and second loop that checks all the previous dp[j] values
    get the max longest length for that i-th index by comparing len and dp[i] + dp[j]
    finally after the loop, set dp[i] to len (which is by that point the max value)
    
    return the max value from the dp array
    */
    
    const n = nums.length
    if (n === 0) return 0
    
    let dp = new Array(n).fill(1)
    for (let i = 0; i < n; i++) {
        let len = dp[i]
        for (let j = 0; j < i; j++) {
            // look for smaller value than nums[i]
            if (nums[j] < nums[i]) {
                len = Math.max(len, dp[i] + dp[j])
            }
        }
        dp[i] = Math.max(dp[i], len)
    }
    
    return Math.max(...dp)
}
