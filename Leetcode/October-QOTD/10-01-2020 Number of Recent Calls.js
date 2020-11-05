var RecentCounter = function() {
    
    this.arr = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    
    // two pointers
    this.arr.push(t)
    let p1 = 0
    let p2 = this.arr.length-1
    while (this.arr[p2] - this.arr[p1] > 3000) {
        p1 += 1
    }
    return p2 - p1 + 1
};
