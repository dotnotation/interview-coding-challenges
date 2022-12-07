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
    let result = ""
    let counter = 0

    for (let char of s){
        if (char !== "(" || ")"){
            result.concat(char) 
        } else {
            if (char === "("){

                counter++
            } else {
                if (counter % 2 === 0) result.concat(char)
            }
        }
    }

    return result
}