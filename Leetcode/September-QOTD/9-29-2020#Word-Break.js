var wordBreak = function(s, wordDict) {
    
    // dp
    let arr = new Array(s.length + 1)
    arr[0] = true
    
    let set = new Set(wordDict)
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            let subStr = s.slice(j,i)
            if (arr[j] === true && set.has(subStr)) {
                arr[i] = true
            }
        }
    }

    return arr[s.length] === true
}
