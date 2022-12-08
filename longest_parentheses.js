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
        if (open === close){
            maxLength = Math.max(maxLength, open + close)
        } else if (close > open){
            open = 0
            close = 0
        }
    }
    
    // start backwards 
    open = 0
    close = 0

    for (let i = s.length - 1; i >= 0; i--){
        if (s[i] === "("){
            open ++
        } else if (s[i] === ")"){
            close ++
        }

        if (open === close){
            maxLength = Math.max(maxLength, open + close)
        } else if (open > close){
            open = 0
            close = 0
        }
    }

    return maxLength
}