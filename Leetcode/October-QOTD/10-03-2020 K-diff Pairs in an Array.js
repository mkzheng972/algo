var findPairs = function(nums, k) {
    
    
    /*
    
    Given an array of integers nums and an integer k, return the number of unique k-diff pairs in the array.
    
    nums = [3,1,4,1,5], k = 2
    
    create a map
    key = num
    value = new Set()
    
    if a num is not in the set, add the pair, and add to set, if it already is in the set, skip
    */
    let count = 0
    let map = {}
    
    for (let num of nums) {
        map[num] = map[num] ? map[num] + 1 : 1
    }
    
    for (let key in map) {
        if (k === 0) {      // looking for the same num as key
            if (map[key] > 1) {
                count += 1
            }
        } else {
            if (map[parseInt(key) + k]) {   // only check (key + k) because of unique pair
                count += 1
            }
        }
    }
    return count
};
