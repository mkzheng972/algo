/**
 * Initialize your data structure here.
 */
function Trie() {
    this.keys = {}
    this.isWord = false
}
var WordDictionary = function() {
    this.root = new Trie()
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let curr = this.root
    for (let i = 0; i < word.length; i++) {
        let char = [word[i]]
        if (curr.keys[char] === undefined) {
            curr.keys[char] = new Trie()
        }
        curr = curr.keys[char]
    }
    curr.isWord = true
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    /*
    if i reached the word.length
    if the char is a dot '.', then you want to dfs all node
    if node fulfills the rest of the search word
    return true
    but if it doesn't, stops mid way, return and check other child nodes. 
    return false as default
    */
    const dfs = (node, word, i) => {
        if (!node) {
            return false
        }
        // Not word.length-1 because we start at empty root node and i = 0
        if (i === word.length) {
            return node.isWord
        }
        let char = word[i]
        if (char === '.') {
            for (let key in node.keys) {
                if (dfs(node.keys[key], word, i+1)) {
                    return true
                }
            }
            return false
        } else if (node.keys[char]) {
            return dfs(node.keys[char], word, i+1)
        } else {
            return false
        }
    }
    return dfs(this.root, word, 0)
};
