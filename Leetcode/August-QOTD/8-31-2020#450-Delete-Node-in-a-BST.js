var deleteNode = function(root, key) {
    
    if (root === null) {    // edge case root = null
        return root
    }
    
    if (root.val > key) {
        root.left = deleteNode(root.left, key)  // reset left subtree
    } else if (root.val < key) {
        root.right = deleteNode(root.right, key)    // reset right subtree
    } else {
        // found the key
        if (root.left === null) {   // no left child
            return root.right
        } else if (root.right === null) {   // no right child
            return root.left
        } else {        // both exists -> find right's min node
            let leftMinNode = findLeftMin(root.right)
            root.val = leftMinNode.val      // reset value
            root.right = deleteNode(root.right, leftMinNode.val)    // reset right subtree
        }
    }
    
    function findLeftMin(node) {    // help func gets the right side's min node
        while (node.left) {
            node = node.left
        }
        return node
    }
    return root
};
