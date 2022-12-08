// accepts a string on parentheses
// return the length/number of the valid parentheses

function longestParentheses(s){
    // counter for both types of parentheses
    // the length will be the number of valid open and close combined
    // the open and close amount must be the same number
    
    let open = 0
    let close = 0
    let maxLength = 0
    debugger 
    for (let i =0; i < s.length; i++){
        if (s[i] === "("){
            open++
        } else if (s[i] === ")"){
            close++
        } 
    }

    if (open === 1 && close === 1){
        maxLength = 0
    } else if (open === close){
        maxLength = Math.max(maxLength, open + close)
    } else {
        open < close ? maxLength = open * 2 : maxLength = close * 2
    }

    return maxLength
}