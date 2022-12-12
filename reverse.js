// given a string
// return the string reversed 

function reverse(s){
    let result = ''

    for (let i = s.length - 1; i >= 0; i--){
        result += s[i]
    }
    return result
}

function reverse(s){
   return s.split('').reverse().join('')
}

function reverse(s){
    let result = []

    for (var i = s.length - 1; j = 0; i >= 0; i--; j++){
        result[j] = s[i]
    }

    return result.join('')
}