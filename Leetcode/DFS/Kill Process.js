/**
 * @param {number[]} pid
 * @param {number[]} ppid
 * @param {number} kill
 * @return {number[]}
 */
var killProcess = function(pid, ppid, kill) {
    
    /*
    time: o(n)
    space: o(v + e) ? or o(n)
    n = number of nodes
    v = parent nodes
    e = child nodes
    adjlist + dfs
    
    killing a process kills all the childs too...
    get an adjlist of all the parent to child associations
    dfs func to get all the nodes that will be killed with the starting kill node
    
    */
    
    let res = []
    let adjlist = {}
    let n = ppid.length
    for (let i = 0; i < n; i++) {
        let currParent = ppid[i]
        let currChild = pid[i]
        if (adjlist[currParent] === undefined) {
            adjlist[currParent] = []
        }
        adjlist[currParent].push(currChild)
    }
    
    function dfs(node) {
        res.push(node)
        let children = adjlist[node]
        if (children && children.length > 0) {
            for (let child of children) {
                dfs(child)
            }
        }
    }
    
    dfs(kill)
    return res
};
