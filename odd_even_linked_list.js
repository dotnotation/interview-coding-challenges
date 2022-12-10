// given the head of a singly linked list
// group all nodes with odd indices together
// followed by all the even indices
// return the reordered list
// first node is odd
// second node is even
// the relative order between the two groups would remain the same as the input
// basically all the odd indices should be returned in the same order as the appeared in the original order
// needs to be space: 0(1) time: O(n)

// as I have not used linked lists before, I followed a tutorial by Shirin Setayesh

function oddEvenLinkedList(head){
    // create two linked lists
    // if index is odd, append to oddList
    // if index is even, append to evenList
    // connect the two lists via oddList.next = evenStart.next
    // if node is zero or one return the head
    if (!head || !head.next) return head

    let oddList = new ListNode(-1)
    let evenList = new ListNode(-1)
    let oddStart = oddList
    let evenStart = evenList
    let placeValue = 1
    // our index starts at 1 not 0 
    let current = head
    // this will be the current value during iteration 

    while (current !== null){
        if (placeValue % 2 === 1){
            oddList.next = current
            oddList = oddList.next
            // this moves oddList forward
        } else {
            evenList.next = current
            evenList = evenList.next
        }
        // now we want to go to the next value in the linked list
        // so we go to the next index and move our linked list element forward
        placeValue++
        current = current.next
    }

    // once we have sorted all elements into their separate lists, we need to connect them
    oddList.next = evenStart.next
    evenList.next = null

    return oddStart.next 
}