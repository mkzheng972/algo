var summaryRanges = function(nums) {
    
    let output = []

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        while (i < nums.length-1 && nums[i] === nums[i+1]-1) {
            i += 1
        }
        if (num === nums[i]) {
            output.push(num + '')
        } else {
            output.push(`${num}->${nums[i]}`)
        }
    }
    return output
};
