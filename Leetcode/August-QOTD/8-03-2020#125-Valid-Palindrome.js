var isPalindrome = function(s) {
    
    // start from both ends, move towards the middle
    
    let left = 0
    let right = s.length - 1
    
    while(left < right) {
        let leftChar = s[left].toLowerCase()
        let rightChar = s[right].toLowerCase()
        
        if ((leftChar.charCodeAt() < 97 || leftChar.charCodeAt() > 122) && (leftChar.charCodeAt() < 48 || leftChar.charCodeAt() > 57)) {
            left++
            continue
        }
        if ((rightChar.charCodeAt() < 97 || rightChar.charCodeAt() > 122) && (rightChar.charCodeAt() < 48 || rightChar.charCodeAt() > 57)) {
            right--
            continue
        }
        if (leftChar !== rightChar) {
            return false
        }
        left++
        right--
    }
    return true
};
