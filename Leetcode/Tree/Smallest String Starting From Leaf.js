/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
var smallestFromLeaf = function(root) {
    
    // console.log(String.fromCharCode(97))
    let min = ''
    function dfs(node, temp) {
        
        if (node === null) {
            return
        }
        
        temp.push(String.fromCharCode(97 + node.val))
        if (node.left === null && node.right === null) {
            let path = temp.slice().reverse().join('')
            if (min === '') {
                min = path
            } else if (path < min) {
                min = path
            }
        }
        if (node.left) {
            dfs(node.left, temp)
        }
        if (node.right) {
            dfs(node.right, temp)
        }
        temp.pop()
    }
    dfs(root, [])
    return min
};
