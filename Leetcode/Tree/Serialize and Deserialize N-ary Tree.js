/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/*
dfs appraoch
separates each node using '#' and each branch end using ')'

serialize:
time: O(n)
space: O(n)

deserialize:
time: O(n)
space: O(n)
*/

class Codec {
  	constructor() {
        
    }
    
    /** 
     * @param {Node} root
     * @return {string}
     */
    // Encodes a tree to a single string.
    serialize = function(root) {
        
        if (root === null) {
            return ''
        }
        
        let res = []
        function dfs(node) {
            if (node === null) {
                return
            }
            res.push(node.val + '#')
            for (let child of node.children) {
                dfs(child)
            }
            res.push(')' + '#')
        }
        dfs(root)
        return res.join('')
    };
	
    /** 
     * @param {string} data 
     * @return {Node}
     */
    // Decodes your encoded data to tree.
    deserialize = function(data) {
        
        if (data === '') {
            return null
        }
        
        data = data.split('#')
        let root = null
        let stack = []
        
        for (let i = 0; i < data.length; i++) {
            if (data[i] !== ')') {
                let currNode = new Node(parseInt(data[i]), [])
                if (stack.length > 0) {
                    let prevNode = stack[stack.length-1]
                    prevNode.children.push(currNode)
                } else if (root === null) {
                    // first node
                    root = currNode
                }
                stack.push(currNode)
            } else if (data[i] === ')') {
                stack.pop()
            }
        }
        return root
    };
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));
