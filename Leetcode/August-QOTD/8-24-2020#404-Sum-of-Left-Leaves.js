var sumOfLeftLeaves = function(root) {
    
    
    let total = 0
    function dfs(node) {
        
        /*
        
        A:
        only want left leaf node values
        need to check if the current node's left is a left node..
        add to total if it is
        
        */
        
        // current node is leaf node or null
        if (node === null || (node.left === null && node.right === null)) {
            return
        }
        
        // current node has a left leaf node
        if (node.left !== null && node.left.left === null && node.left.right === null) {
            total += node.left.val
        }
        
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)
    return total
};
