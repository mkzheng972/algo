var lengthOfLongestSubstringKDistinct = function(s, k) {
    
    /*
    time: o(n*k)
    space: o(k)
    
    sliding window
    
    thoughts:
    looks to be a sliding window question
    have a map to store count of each characters
    variable to keep track of number of distinct characters
    
    takeaways:
    sliding window -> for loop + nested while loop
    Object.keys(map) is o(n) time, takes longer
    delete map[key] takes longer as well
    
    */
    
    let map = {}
    let left = 0
    let right = 0
    let n = s.length
    let res = 0
    let distinct = 0
    
    for (let right = 0; right < n; right++) {
        let currNum = s[right]
        if (!map[currNum]) {    // not undefined this time because it can be 0
            map[currNum] = 1
            distinct += 1
        } else {
            map[currNum] += 1
        }
        
        // shrink window
        while (left <= right && distinct > k) {
            let leftNum = s[left]
            map[leftNum] -= 1
            if (map[leftNum] === 0) {
                distinct -= 1
            }
            left += 1
        }
        res = Math.max(res, right - left + 1)
    }
    
    return res
};
