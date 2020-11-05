var cloneGraph = function(node) {
    if (!node) {
        return node
    }

    let memo = {}
    let head = new Node(node.val, [])
    memo[node.val] = head
    let stack = [node]
    
    while(stack.length) {
        let current = stack.pop()
        current.neighbors.forEach(neighbor => {
            // creates the node if neighbor is undefined in memo
            if (memo[neighbor.val] === undefined) {
                memo[neighbor.val] = new Node(neighbor.val)
                stack.push(neighbor)
            }
            // set the neighbors for new copy using original node.value
            memo[current.val].neighbors.push(memo[neighbor.val])
        })
    }
    return head
};
