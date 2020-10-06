var maxProduct = function(nums) {
    
    
    let max = Math.max(...nums)
    for (let i = 0; i < nums.length; i++) {
        let currSum = nums[i]
        for (let j = i+1; j < nums.length; j++) {
            currSum *= nums[j]
            max = Math.max(max, currSum)
        }
    }
    return max
};
