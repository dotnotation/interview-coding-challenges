// given the head of a singly linked list
// the head is an array of numbers
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
    let oddList = new ListNode(-1)
    let evenList = new ListNode(-1)
    let oddStart = oddList
    let evenStart = evenList
    let placeValue = 1
    let current = head

}