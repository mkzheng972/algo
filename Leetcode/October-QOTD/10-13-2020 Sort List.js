var sortList = function(head) {
    
    /*
    merge sort : O(n*logn) time
    merge sort steps:
    1. cut the array / list into two halves
    2. recursively call the two halves until list is only one node
    3. merge by sorting of the result of each recursive call and return the result of each split
    
    approach:
    loop thru the LL with slow and fast pointer to get to the mid point (fast is 2x speed vs slow)
    send fast reaches the end, slow will read the middle
    split the list at slow
    */
    
    if (head === null || head.next === null) {
        return head
    }
    // step 1 cut into halves by getting slow to mid point
    let prev = null
    let slow = head
    let fast = head
    while (fast !== null && fast.next !== null) {
        prev = slow
        slow = slow.next
        fast = fast.next.next
    }
    prev.next = null    // cuts LL into two lists at slow pointer
    
    // step 2 recursive call to sort lists
    let list1 = sortList(head)
    let list2 = sortList(slow)
    
    // step 3 merge
    let root = new ListNode(null)
    let pointer = root
    while(list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            pointer.next = list1
            list1 = list1.next
        } else {
            pointer.next = list2
            list2 = list2.next
        }
        pointer = pointer.next
    }
    
    // one list reached the end, all the other values are on the other list
    if (list1 !== null) {
        pointer.next = list1
    }
    if (list2 !== null) {
        pointer.next = list2
    }
    return root.next
};
