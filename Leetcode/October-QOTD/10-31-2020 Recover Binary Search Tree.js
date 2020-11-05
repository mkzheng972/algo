var recoverTree = function(root) {
    
    let arr = []
    let node1 = null
    let node2 = null
    let prevNode = new TreeNode(-Infinity)
    function inorder(node) {
        if (node === null) {
            return
        }
        inorder(node.left)
        
        if (node1 === null && prevNode.val >= node.val) {
            node1 = prevNode
        }
        
        if (node1 !== null && prevNode.val >= node.val) {
            node2 = node
        }
        prevNode = node
        inorder(node.right)
    }
    inorder(root)
    
    let temp = node1.val
    node1.val = node2.val
    node2.val = temp
};
