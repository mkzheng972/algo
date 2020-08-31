var largestComponentSize = function(A) {
        
    /*
    R:
    
    there are A.length nodes in the A input array
    find if there exists an edge between any two nodes
    return the length of the largest connected graph
    
    E:
    
    [4,6,15,35]
      2. 3. 5
    output: 4
    
    A:
    
    this question looks to be an union find question
    each node exists as its own subset
    for this case, we can make each node a object
    the object would have properties of -> val, parent, length, childArr
    parent -> determined by which val is smaller
    length -> length of the connected graph
    when an edge is formed, you want to append node to the parents' childArr
    also append current node's children in childArr to it as well 
    have a maxLength variable as the counter for max length of any graph made
    
    */
    let maxLen = 0
    let maxNum = Math.max(...A)
    let parent = new Array(maxNum + 1).fill(0).map((val,index) => index)    // Array(maxNum+1).keys() works as well
    let size = new Array(maxNum + 1).fill(1)
    
    function find(num) {
        if (parent[num] === num) {
            return num
        } else {
            return parent[num] = find(parent[num])      // path compression by assignment
        }
    }
    
    function union(a,b) {
        let rootA = find(a)
        let rootB = find(b)
        if (rootA !== rootB) {
            parent[rootB] = rootA
            size[rootA] += size[rootB]
            maxLen = Math.max(maxLen, size[rootA])
            // if (af < bf) {
            //     parent[bf] = af
            //     size[af] += size[bf]
            // } else {
            //     parent[af] = bf
            //     size[bf] += size[af]
            // }
        }
    }
    let map = {}        // map to find any common factors that exist between the nums in array
    for (let i = 0; i < A.length; i++) {
        let curr = A[i]
        for (let j = 2; j * j <= curr; j++) {

            if (curr % j === 0) {       // common factor finder via map
                if (map[j] === undefined) {
                    map[j] = curr
                } else {
                    union(curr, map[j])
                }
                let div = Math.floor(curr/j)
                if (map[div] === undefined) {
                    map[div] = curr
                } else {
                    union(curr, map[div])
                }
            }
        }
        if (map[curr] === undefined) {
            map[curr] = curr
        } else {
            union(curr, map[curr])
        }
    }
    return maxLen
};
