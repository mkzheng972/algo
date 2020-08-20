var reorderList = function(head) {
    
    /*
    goal: return reorder list
    
    A:
    two pointers
    slow pointer and fast pointer
    slow pointer stops at the middle
    slow.next is the head of the new list
    reverse the newlist
    merge the two list together
    
    */
    // edge case null head
    if (head === null) {
        return head
    }
    // 1. get to the middle of the list
    let slow = head
    let fast = head
    while (fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
    }
    let list2 = slow.next   // new list head is slow.next
    slow.next = null
    
    // 2. reverse helper func to reverse second half list
    function reverse(node) {
        let prev = null
        while(node) {
            let next = node.next
            node.next = prev
            prev = node
            node = next
        }
        list2 = prev
    }
    
    // 3. merge two lists together
    reverse(list2)
    let list1 = head
    while (list1 && list2) {
        let next1 = list1.next
        let next2 = list2.next
        list1.next = list2
        list2.next = next1
        list1 = next1
        list2 = next2
    }
};
