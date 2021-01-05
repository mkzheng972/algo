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
    */
    
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
};
