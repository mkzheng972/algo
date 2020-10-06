var sumRootToLeaf = function(root) {
    
    if (root === null) {
        return 0
    }
    let store = []
    function dfs(node, temp) {
        if (node.left === null && node.right === null) {
            temp.push(node.val)
            store.push(temp.join(''))
            return
        }
        temp.push(node.val)
        if (node.left) {
            dfs(node.left, temp)
            temp.pop()
        }
        if (node.right) {
            dfs(node.right, temp)
            temp.pop()
        }
        
    }
    dfs(root, [])
    let sum = 0
    for (let str of store) {
        sum += parseInt(str, 2)
    }
    return sum
};
