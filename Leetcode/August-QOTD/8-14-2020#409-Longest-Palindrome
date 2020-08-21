var longestPalindrome = function(s) {
    
    /*
    notes:
    palindrome can only have 1 odd char
    need at least 2 counts of the char
    if count is greater than 1 and odd, then get count - 1
    */
    let hash = {}
    for (let char of s) {
        if (hash[char] === undefined) {
            hash[char] = 1
        } else {
            hash[char] += 1
        }
    }
    let output = 0
    let gotOdd = false
    for (let key in hash) {
        if (hash[key] % 2 === 0) {
            output += hash[key]
        } else {
            if (gotOdd) {
                output += hash[key] - 1
            } else {
                output += hash[key]
                gotOdd = true
            }
        }
    }
    return output
};
