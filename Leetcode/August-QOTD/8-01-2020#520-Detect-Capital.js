var detectCapitalUse = function(word) {
    
    /*
    word can only be:
    all uppercase
    all lowercase
    only first letter uppercase
    */
    let uppercase = 0
    let lowercase = false
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toLowerCase()) {
            lowercase = true
            if (uppercase >= 2) {
                return false
            }
        } else if (word[i] === word[i].toUpperCase()) {
            if (lowercase === true) {
                return false
            }
            uppercase += 1
        }
    }
    return true
};
