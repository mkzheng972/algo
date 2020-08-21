var closestValue = function(root, target) {
    
    /*
    goal: find the value that is closest to target
    
    A:
    dfs
    need math.abs
    only check node.left if current node val is less than target
    check node.right if current node val is greater than target
    */
    
    let num = 0
    let min = Infinity
    function dfs(node) {
        if (node === null) {
            return
        }
        let dif = Math.abs(node.val - target)
        if (min > dif) {
            min = dif
            num = node.val
        }
        if (node.val > target) {
            dfs(node.left)
        } else {
            dfs(node.right)
        }
    }
    dfs(root)
    return num
};
