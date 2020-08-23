var StreamChecker = function(words) {
    
    /*
    A:
    
    create a backwards trie starting from the end of the current word
    when we reached the last index of the word, add on a isWord property
    create an array to store the previous seen letters
    
    query -> 
    need to loop backwards in the array
    check if the current word exists in the current trie position
    if it does not -> return false
    if it does then continue the loop
    once we reached a isWord = true, we found a match that spells out a word in the words list
    */
    
    this.arr = []
    this.trie = {}
    for (let word of words) {
        let curr = this.trie
        for (let i = word.length-1; i >= 0; i--) {
            let char = word[i]
            if (curr[char] === undefined) {
                curr[char] = {}
            }
            if (i === 0) {
                curr[char].isWord = true
            }
            curr = curr[char]
        }
    }
};

/** 
 * @param {character} letter
 * @return {boolean}
 */
StreamChecker.prototype.query = function(letter) {
    this.arr.push(letter)
    let i = this.arr.length-1
    let curr = this.trie
    while (i >= 0) {
        let currChar = this.arr[i]
        i -= 1
        curr = curr[currChar]
        if (curr === undefined) {
            return false
        }
        if (curr.isWord) {
            return true
        }
    }
    return false
};
