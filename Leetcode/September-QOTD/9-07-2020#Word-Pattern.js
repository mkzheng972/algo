var wordPattern = function(pattern, str) {
    
    /*
    find if str follows the same pattern.
    follow means a full match
    bijection -> every element in both sets are matched and its one to one
    match to non-empty word in str
    
    we are given the pattern in pattern, need to find out if str follows the same pattern
    ignores whitespace between words
    hashmap matching
    two hashmaps: one for pattern, one for str words
    str should have pattern.length number of words
    split the str into array and map the arr to return new one without empty strings as elements
    */
    
    let newArr = str.split(' ').filter(el => el !== '')
    if (newArr.length !== pattern.length) {
        return false
    }
    let map1 = {}
    let map2 = {}
    for (let i = 0; i < pattern.length; i++) {
        let char = pattern[i]
        let word = newArr[i]
        if (map1[char] === undefined && map2[word] === undefined) {
            map1[char] = word
            map2[word] = char
        } else if (map1[char] !== word || map2[word] !== char) {
            return false
        }
    }
    return true
};
