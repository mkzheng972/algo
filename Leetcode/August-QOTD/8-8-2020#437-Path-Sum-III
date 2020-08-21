var pathSum = function(root, target) {
    
    /*
    goal: find count of number of paths that sum up to target
    
    A:
    two dfs
    - one to dfs thru the tree
    - another dfs to start the traverse/subtree at current node
    
    */
    
    let count = 0
    function sum(node, currSum) {
        if (!node) {
            return
        }
        currSum += node.val
        if (currSum === target) {
            count += 1
        }
        sum(node.left, currSum)
        sum(node.right, currSum)
    }
    function dfs(node) {
        if(!node) return
        sum(node, 0)
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)
    return count
};
