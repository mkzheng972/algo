var findTheDifference = function(s, t) {
    
    let map1 = {}
    let map2 = {}
    
    for (let char of s) {
        if (map1[char] === undefined) {
            map1[char] = 1
        } else {
            map1[char] += 1
        }
    }
    
    for (let char of t) {
        if (map2[char] === undefined) {
            map2[char] = 1
        } else {
            map2[char] += 1
        }
    }
    
    for (let key in map2) {
        if (map1[key] === undefined || map1[key] !== map2[key]) {
            return key
        }
    }
};
