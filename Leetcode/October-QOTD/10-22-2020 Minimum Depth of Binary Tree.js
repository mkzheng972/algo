var minDepth = function(root) {
    if (root === null) {
        return 0
    }
    let min = Infinity
    function dfs(node, depth) {
        if (node === null) {
            return
        }
        if (node.left === null && node.right === null) {
            min = Math.min(min, depth)
            return
        }
        dfs(node.left, depth+1)
        dfs(node.right, depth+1)
    }
    dfs(root, 1)
    return min
};
