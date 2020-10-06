var calcEquation = function(equations, values, queries) {
    

    // "key" : "value"
    // "b" : Map
    // Map -> "negihborKeyName" : "costToGetThere"
    let adjlist = new Map()
    
    for (let i = 0; i < equations.length; i++) {
        let [start, end] = equations[i]
        let value = values[i]
        
        if (!adjlist.has(start)) {
            adjlist.set(start, new Map())
        }
        if (!adjlist.has(end)) {
            adjlist.set(end, new Map())
        }
        adjlist.get(start).set(end, value)
        adjlist.get(end).set(start, 1/value)
    }
    
    function dfs(node, target, cost, visited = new Set()) {
        if (!adjlist.has(node)) {
            return null
        }
        visited.add(node)
        let list = adjlist.get(node)
        for (let [char,value] of list) {
            let currCost = cost * value
            
            if (char === target) {
                return currCost
            }
            
            if (!visited.has(char)) {
                let newCost = dfs(char, target, currCost, visited)
                if (newCost) {
                    return newCost
                }
            }
        }
        return null
    }
    
//     a --- 2 ---> b -- 3 --> c
    
//     a/b = 2     b/c = 3
//     a = 6       b = 3
//     b = 3       c = 1
    
//     start = a
//     target = b
//     1 * 2 -> cost
//     cost 2
    
//     a === a
    
    
    let output = []
    for (let i = 0; i < queries.length; i++) {
        let [start, end] = queries[i]
        let val = dfs(start, end, 1)
        if (val === null) {
            output.push(-1)
        } else {
            output.push(val)
        }
    }
    return output
};
