// similar to remove duplicates
// stack [[char, count]]

function candyCrush(s){
    const stack = []
    let res = ''
    for (let char of s){
        // stack[stack.length -1] is the top of the stack
        if (stack.length && char == stack[stack.length-1][0]){
            let streak = stack[stack.length-1][1]+1
            if (streak >= 3){
                stack.pop()
            } else{
                stack[stack.length-1] = [char,  streak]
            }
        } else {
            stack.push([char,1])
        }
    }

    for (let elem of stack){
        res += elem[0].repeat(elem[1])
    }
    return res
}
