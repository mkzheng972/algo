var maxAncestorDiff = function(root) {
    
    
    /*
    A:
    
    for each node, should have the max and min values in its call
    find the math.abs() from node.val - max and node.val - min
    
    */
    
    let abs = 0
    function dfs(node, min, max) {
        
        if (node === null) {
            return
        }
        let newMin = Math.min(min, node.val)
        let newMax = Math.max(max, node.val)
        abs = Math.max(abs, Math.abs(node.val - min), Math.abs(node.val - max))
        dfs(node.left, newMin, newMax)
        dfs(node.right, newMin, newMax)
    }
    dfs(root, root.val, root.val)
    return abs
};
