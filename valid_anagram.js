// takes in two strings (s, t)
// strings are lowercase letters, no special characters
// returns true or false

function validAnagram(s, t){
    // loop through s and loop of t
    // compare beginning of s to end of t
    // save in object? 
    let sObj = {}
    let tObj = {}
    if (s.length !== t.length){
        return false
    }
    for (let val of s) {
        sObj[val] = (sObj[val] || 0) + 1
    }
    
    for (let val of t){
        tObj[val] = (tObj[val] || 0) + 1
    } 

    for (let key in sObj){
        if (!(key in tObj)){
            return false
        }
        if (sObj[key] !== tObj[key]){
            return false
        }
    }
    return true
}

validAnagram("car", "cat")
