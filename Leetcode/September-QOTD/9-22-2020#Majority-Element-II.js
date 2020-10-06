var majorityElement = function(nums) {
    
    /*
    majority vote algorithm
    elm that appear more than n/3 times
    only 2 majority at most
    */
    
    if (nums.length === 0) {
        return []
    }
    let val = nums.length / 3
    let output = []
    
    let candidate1 = 0
    let candidate2 = 0
    let count1 = 0
    let count2 = 0

    for (let num of nums) {
        if (candidate1 === num) {
            count1 += 1
        } else if (candidate2 === num) {
            count2 += 1
        } else if (count1 === 0) {
            candidate1 = num
            count1 += 1
        } else if (count2 === 0) {
            candidate2 = num
            count2 += 1
        } else {
            count1 -= 1
            count2 -= 1
        }
    }
    count1 = 0
    count2 = 0
    for (let num of nums) {
        if (candidate1 === num) {
            count1 += 1
        }else if (candidate2 === num) {
            count2 += 1
        }
    }
    if (count1 > val) {
        output.push(candidate1)
    }
    if (count2 > val) {
        output.push(candidate2)
    }
    // if (candidate1 === candidate2) {
    //     return [candidate1]
    // }
    return output
};
