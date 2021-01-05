/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    
    /*
    
    time: o(n)
    space: 0(1)
    
    notes:
    - given sorted list so any duplicates would be in order adjacent to each other
    - can check the adj nodes of current node and decide if we want it or not
    - create a dummyhead and append nodes to the dummyhead to create new list
    - we want to increment prev pointer in every iteration to compare with the current pointer
    - don't want to only increment prev pointer when its a unique node value
    
    */
    
    if (head === null) {
        return head
    }
    
    let dummyHead = new ListNode()
    dummyHead.val = head.val === 0 ? 1 : 0
    let list = dummyHead
    let prev = dummyHead
    let curr = head
    
    while (curr !== null && curr.next !== null) {
        let next = curr.next
        if (prev.val !== curr.val && curr.val !== next.val) {
            list.next = curr
            list = list.next
            
        }
        prev = curr
        curr = curr.next
    }
    
    if (prev.val !== curr.val) {
        list.next = curr
        list = list.next
    }
    list.next = null
    
    return dummyHead.next
    
    /*
    
    hashmap + linked list
    time: o(n)
    space: o(n)
    
    goal: delete all the nodes that have values that appear more than once
    
    notes:
    - perhaps we can use a hashmap to get freq of all the values
    - two pass solution 
        - first loop will get the frequencies
        - second loop will delete if freq is greater than 1
    - have a dummyHead
    
    
    const map = {}
    const dummyHead = new ListNode()
    dummyHead.next = head
    
    let p1 = head
    while (p1) {
        if (map[p1.val] === undefined) {
            map[p1.val] = 1
        } else {
            map[p1.val] += 1
        }
        p1 = p1.next
    }
    
    let prev = dummyHead
    let p2 = head
    while (p2) {
        if (map[p2.val] > 1) {
            let next = p2.next
            prev.next = next
        } else {
            prev = p2
        }
        p2 = p2.next
    }
    
    return dummyHead.next  
    */
};
