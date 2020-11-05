var rotateRight = function(head, k) {
    
    if (head === null || k === 0) {
        return head
    }
    
    let listLen = 1
    let curr = head
    while (curr.next) {
        curr = curr.next
        listLen += 1
    }
    curr.next = head
    
    let step = listLen - (k % listLen)
    let count = 1
    let node = head
    while (count < step) {
        count += 1
        node = node.next
    }
    let newHead = node.next
    node.next = null
    
    return newHead
};
