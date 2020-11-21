/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    
    /* 
    
    backtracking question w/ graph
    time: o(n^2 * n)
    adj list
    0   [1,2], 
    1   [3], 
    2   [3], 
    3   []
    
    approach
    dfs from node (0) --> target (N-1)
    since its directed and acyclic --> no concern for checking repeating nodes in value
    loop thru each value and check if it reaches N-1
    push value to path array and pop after the dfs
    
    */
    
    let target = graph.length - 1    // target
    let output = []
    
    function dfs(node, path) {
        
        if (node === target) {       // reached target node
            output.push([...path])
            return
        } else {
            let neighbors = graph[node]
            if (neighbors.length > 0) {
                for (let i = 0; i < neighbors.length; i++) {
                    path.push(neighbors[i])
                    dfs(neighbors[i], path)
                    path.pop()
                }
            }
        }
    }
    dfs(0, [0])
    return output
};
