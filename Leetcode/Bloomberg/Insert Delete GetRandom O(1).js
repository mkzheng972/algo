/*

the trick to this question is to move the value at last index to the index of the val that is passed in to remove, and array.pop() for o(1)

*/

class RandomizedSet {
    constructor() {
        
        this.map = {}
        this.arr = []
    }
    
    /**
     * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
     * @param {number} val
     * @return {boolean}
     */
    insert(val) {
        
        if (this.map[val] === undefined) {
            this.map[val] = this.arr.length
            this.arr.push(val)
            return true
        } else {
            return false
        }
    }
    
    /**
     * Removes a value from the set. Returns true if the set contained the specified element. 
     * @param {number} val
     * @return {boolean}
     */
    remove(val) {
        
        if (this.map[val] === undefined) {
            return false
        } else {
            
            // move last elm value to current elm index
            const n = this.arr.length
            const lastElm = this.arr[n-1]
            const currIdx = this.map[val]
            
            this.arr[currIdx] = lastElm
            this.arr.pop()
        
            this.map[lastElm] = currIdx
            delete this.map[val]
        
            return true
        }
    }
    /**
     * Get a random element from the set.
     * @return {number}
     */
    getRandom() {
        
        const randomIdx = Math.floor(Math.random() * this.arr.length)
        return this.arr[randomIdx]
    }
}
