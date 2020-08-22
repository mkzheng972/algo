var Solution = function(rects) {
    
    /*
    A:
    
    - the question states uniformly get the points from the input rects
    - need to get the area sum of the rects and..
    - place the current added sum as the key and index of rect as the value
    - think of it as each key covers a specific area (range) and if a value lands in its range..
    - that is the new position of the pick return value
    
    pick:
    - get a random key within the area range as the new position of the point
    - check for which key and index the random key falls under..
    - via for loop or binary search
    - get the selected rect from the index value
    - get new x,y using math.random and xy ranges of the rect
    
    */
    
    this.rects = rects  // 2d array
    this.sum = 0
    this.map = new Map()
    for (let i = 0; i < rects.length; i++) {
        let [x1,y1,x2,y2] = rects[i]
        // get the area of the rect
        this.sum += ((x2-x1) + 1) * ((y2-y1) + 1)
        this.map.set(this.sum, i)
    }
    this.arr = [...this.map]
};

/**
 * @return {number[]}
 */
Solution.prototype.pick = function() {
    
    // get a random index
    const randomKey = Math.ceil(Math.random() * this.sum)
    let left = 0
    let right = this.arr.length-1
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2)
        if (randomKey > this.arr[mid][0]) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    const newIndex = this.arr[left][1]
    const [x1,y1,x2,y2] = this.rects[newIndex]
    const x3 = Math.floor(Math.random() * (x2 - x1 + 1) + x1)
    const y3 = Math.floor(Math.random() * (y2 - y1 + 1) + y1)
    return [x3,y3]
};
