// accepts a string(s)
// the string contains parentheses and lowercase letters
// remove the minimum number of parentheses so that the result makes a valid string
// basically make sure that there is a pair of () and no lone ( or )
// ex. Input: s = "lee(t(c)o)de)"
// Output: "lee(t(c)o)de"
// Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.

function removeParentheses(s){
    // variable for result
    // variable for counter of parentheses 
    // make sure counter is divisible by two
    // maybe need to store as a stack or object to compare index?
    const result = s.split('')
    const stack = []

    for (let i = 0; i < result.length; i++){
        if (result[i] === "("){
            stack.push(i)
        } else if (result[i] === ")" && stack.length){
            stack.pop()
        } else if (result[i] === ")"){
            result[i] = ""
        }
    }

    for (let j = 0; j < stack.length; j++){
        result[stack[j]] = ""
    }
    return result.join('')
}

// other method in progress
function removeParentheses(s){

    let result = ""
    let counter = 0

    for (let char of result){
        if (char !== "(" || ")"){
            result.concat(char) 
        } else {
            if (char === "("){
                if (counter === 0){
                    result.concat(char)
                }
                counter++
            } else {
                if (counter === 1) {
                    result.concat(char)
                    counter = 0
                }
            }
        }
    }

    return result
}