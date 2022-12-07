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
    // need a variable to compare values and count
    // stack[[char, count]]
    let stack = []
    // iterate through string
    for (let char of s){
        // if element is in stack k amount of times, pop 
        // otherwise push
        if (stack.length && stack[stack.length-1][0] === char){
            stack[stack.length - 1][1] += 1
            if (stack[stack.length - 1][1] === k){
                // when the count = k we want to pop
                stack.pop()
            } else {
                // when we don't have the character already, add the char to the stack and set count to 1
                stack.push([char, 1])
            }
        } 
    }

    let result = ''
    
    for (let [char, count] of stack){
        result += char.repeat(count)
    }

    return result
}

// alternate solution
function removeDuplicates(s, k){
    let stack = []

    for (let i = 0; i < s.length; i ++){
        let current = s[i]
        let peek = stack[stack.length - 1]

        if (stack.length === 0 || peek[0] !== current){
            // if the stack is empty or the current element is not in the stack
            stack.push([current, 1])
            // push that element into the stack with a count of 1
        } else {
            // if the char is already in the stack, increase the count by 1
            peek[1]++
            // if the count equals k, pop off those char
            if (peek[1] === k) stack.pop()
        }
    }

    let result = ''

    for (let [char, count] of stack){
        // for the char that remains in stack array, repeat that char count amount of times
        result += char.repeat(count)
    }

    return result
}

// Time and space is 0(n)
