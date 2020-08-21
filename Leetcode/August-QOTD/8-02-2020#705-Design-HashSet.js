/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
    this.set = {}
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    if (this.set[key] === undefined) {
        this.set[key] = true
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    if (this.set[key]) {
        delete this.set[key]
    }
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    return this.set[key] === true
};
