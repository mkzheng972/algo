var serialize = function(root) {
    
    return JSON.stringify(root)
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    
    let obj = JSON.parse(data)
    function dfs(obj) {
        if (obj === null) {
            return null
        }
        let node = new TreeNode(obj.val)
        node.left = dfs(obj.left)
        node.right = dfs(obj.right)
        return node
    }
    let head = dfs(obj)
    return head
};
