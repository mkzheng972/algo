var findTilt = function(root) {
    
    let totalTilt = 0
    
    function dfs(node) {
        
        if (node === null) {
            return 0
        }
        let left = dfs(node.left)
        let right = dfs(node.right)
        let tilt = Math.abs(left - right)
        totalTilt += tilt
        return left + right + node.val
    }
    
    dfs(root)
    return totalTilt
};
