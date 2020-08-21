var findDuplicates = function(nums) {
    
    const output = []
    for (let i = 0; i < nums.length; i++) {
        let val = Math.abs(nums[i]) - 1     // -1 because values are only 1 -> n, need to check for 0 index
        if (nums[val] < 0) {
            output.push(Math.abs(nums[i]))
        } else {
            nums[val] = -nums[val]
        }
    }
    return output
};
