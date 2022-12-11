// takes in an array of k linked-lists
// each linked-list is sorted in ascending order
// merge all linked-lists into one sorted linked-list
// return the sorted list
// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5, - first list
//   1->3->4, - second list
//   2->6 - third list
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6

// followed Shirin Setayesh's tutorial
function mergeList(a, b){
    let dummy = new ListNode(0)
    let current = dummy
    
    while (a !== null && b !== null){
        if (a.val < b.val){
            // sort in ascending order
            current.next = a
            a = a.next
            // moving a element forward
        } else {
            current.next = b
            b = b.next
            // moving b element forward
        }
        current = current.next
        // move current forward
    }
    // once one of the lists is null, we want to continue with the other list if one list has more values than the other
    current.next = a || b

    return dummy.next
}

function mergeK(lists){
    // merge two lists
    // keep merging two lists at a time until there is only one
    if (lists.length === 0){
        return null
    }

    while (lists.length > 1){
        let first = lists.shift()
        // shift remove the first item in the array and returns the removed item
        // this will return the first linked-list
        // do the same for the next list
        let second = lists.shift()
        let merged = mergeList(a, b)
        lists.push(merged)
    }
    return lists[0]
}