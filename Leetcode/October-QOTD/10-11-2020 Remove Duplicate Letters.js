var removeDuplicateLetters = function(s) {
    
    if (s.length < 2) {
        return s
    }
    
    let freq = new Array(26).fill(0)
    let checked = new Array(26)
    
    // 97 is a.charCodeAt()
    for (let i = 0; i < s.length; i++) {
        freq[s[i].charCodeAt() - 97] += 1
    }
    
    let output = []
    for (let i = 0; i < s.length; i++) {
        let letter = s[i].charCodeAt() - 97
        freq[letter] -= 1
        
        if (!checked[letter]) {
            while (output.length > 0 && output[output.length-1].charCodeAt() - 97 > letter && freq[output[output.length-1].charCodeAt() - 97] > 0) {
                checked[output[output.length-1].charCodeAt() - 97] = false
                output.pop()
            }
            output.push(s[i])
        }
        checked[letter] = true
    }
    
    return output.join('')
};
