/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node[]} tree
 * @return {Node}
 */
var findRoot = function(tree) {
    
    /*
    Instead of using a "seen" set - we can simply add all the values of the nodes into a Long sum variable, then deduct the children from same variable.
    For example: [1,null,3,2,4,null,5,6]
    Our variable as we progress through the nodes would be:
    sum=0;
    sum= +1 -3 -2 -4 +3 -5 -6 +2 +4 +5 +6 [=1]
    
    by Anonymouso: https://leetcode.com/problems/find-root-of-n-ary-tree/discuss/726453/Java-O(n)-time-with-O(n)-space-and-O(1)-space-follow-up
    
    since all values are unique and there is only one root node,
    the val of root node is -> sum of all nodes - sum of child nodes
    loop once more to look for node.val = sum
    */
    
    let sum = 0
    for (let subTree of tree) {
        sum += subTree.val
        for (let child of subTree.children) {
            sum -= child.val
        }
    }
    for (let node of tree) {
        if (node.val === sum) {
            return node
        }
    }
    
    /*
    // via set
    let set = new Set()
    for (let subTree of tree) {
        for (let child of subTree.children) {
            set.add(child)
        }
    }
    
    for (let node of tree) {
        if (set.has(node) === false) {
            return node
        }
    }
    */

    /*
    
    have a map that stores the number of times the node is visited from indegrees
    if the indegrees is 0, that is the root
    loop thru the tree array and set value of each children node key to 1
    
    
    let map = new Map()
    for (let subTree of tree) {
        map.set(subTree, map.get(subTree) + 1 || 0)
        let children = subTree.children
        for (let child of children) {
            map.set(child, map.get(child) + 1 || 1)
        }
    }
    
    // find the root node
    for (let [node, value] of map) {
        if (value === 0) {
            return node
        }
    }
    */
};
