var getAllElements = function(root1, root2) {
    
    /*
    
    intuition:
    
    dfs each tree and append each node val to array
    sort the array in asc order
    time: o(n*logn)
    
    */
    let arr = []
    function dfs(node) {
        if (node === null) {
            return
        }
        arr.push(node.val)
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root1)
    dfs(root2)
    arr.sort((a,b) => a-b)
    return arr
};
