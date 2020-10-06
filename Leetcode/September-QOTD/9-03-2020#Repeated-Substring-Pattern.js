var repeatedSubstringPattern = function(s) {
    

    // half should equal the other half
    // original string must be less than or equal to half of s.length
    
    let s1 = s + s
    s1 = s1.slice(1, -1)
    
    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < s.length; j++) {
            if (s[j] !== s1[i+j]) {
                break;
            }
            if (j === s.length-1) {
                return true
            }
        }
    }
    return false
};
