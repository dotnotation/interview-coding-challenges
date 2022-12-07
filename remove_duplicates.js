// accepts a string(s) and an integer(k)
// k is the number of adjacent duplicate letters
// remove the duplicates
// the rest of the string will be concat together
// keep removing duplicates until there is a unique answer
// Input: s = "deeedbbcccbdaa", k = 3
// Output: "aa"
// Explanation: 
// First delete "eee" and "ccc", get "ddbbbdaa"
// Then delete "bbb", get "dddaa"
// Finally delete "ddd", get "aa"

function removeDuplicates(s, k){
    // need a variable to compare values
    let duplicates = []
    // iterate through string
    for (let char of s){
        // if element is in duplicates k amount of times, pop 
        // otherwise push
        if (duplicates.length && duplicates[duplicates.length-1][0] === e){
            duplicates[duplicates.length - 1][1] += 1
            if (duplicates[duplicates.length - 1][1] === k){
                duplicates.pop()
            } else {
                duplicates.push([e, 1])
            }
        } 
    }

    return duplicates.join('')
}