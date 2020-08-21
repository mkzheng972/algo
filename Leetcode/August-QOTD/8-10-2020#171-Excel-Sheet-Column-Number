var titleToNumber = function(s) {
    
    /*
    goal: get correspondin column number
    
    E:
    initial result = 0
    A -> 0 * 26 + (A)1 -> 1
    Z -> 0 * 26 + (Z)26 -> 26
    ZY -> 26 * 26 + (Y)25 -> 701
    ZYX -> 701 * 26 + (X)24 -> 18250
    
    A:
    find the single digit letter position number of the current character 
    at each additional digit placement, multiply by 26 
    base 26 instead of base 10
    
    from:
    "BCM" the final solution would be (2 x 26 x 26) + (3 x 26) + (13)
    
    */
    
    let result = 0
    for (let i = 0; i < s.length; i++) {
        result = result * 26 + (s[i].charCodeAt() - 64)
    }
    return result
};
