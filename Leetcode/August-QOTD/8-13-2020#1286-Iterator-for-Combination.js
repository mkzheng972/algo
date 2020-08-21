var CombinationIterator = function(characters, combinationLength) {
    
    /*
    A:
    get the characters into an array
    sort the characters lexicographically
    get all different combination of the characters with combo-length
    have an index for next
    next -> increments this.index and returns current combo
    hasNext -> once index equals length of the characters, return false
    */
    let charArr = characters.split('').sort()
    let combination = []
    function backtrack(tempArr, index) {
        if (tempArr.length === combinationLength) {
            combination.push(tempArr.join(''))
            return
        }
        for (let i = index; i < charArr.length; i++) {
            tempArr.push(charArr[i])
            backtrack(tempArr, i + 1)
            tempArr.pop()
        }
    }
    backtrack([],0)
    this.index = 0
    this.charArr = charArr
    this.combination = combination
    
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function() {

    return this.combination[this.index++]
    // const combo = this.combination[this.index]
    // this.index += 1
    // return combo
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function() {
    
    return this.index < this.combination.length
    // if (this.index === this.combination.length) {
    //     return false
    // } else {
    //     return true
    // }
};
