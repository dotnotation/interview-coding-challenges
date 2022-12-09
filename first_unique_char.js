// takes in a string (s)
// find the first non-repeating character
// return the index
// if it doesn't exist, return -1
// only contains lowercase letters, no special characters

function firstUniqueChar(s){
    // iterate through string
    // store in object and return the first key whose value is 1
        // would store key as index not letter
    // maybe stack would be better? 
        // could pop off if the count > 1
    let obj = {}

    if (s.length <= 1) return 0

    for (let i = 0; i < s.length; i++){
        const char = s[i]
        obj[char] = (obj[char] || 0) + 1
    }


    for (let i = 0; i < s.length; i++){
        const char = s[i]
        if (obj[char] === 1){
            return i
        }
    }

    return -1
}

//Time: O(n)
//Space: O(1) as there is a max of 26 characters that can be stored

// alternate solution 
var firstUniqChar = function(s) {
    if(s.length <= 1) return 0;
    for(let i =0; i< s.length; i++){
        let c = s[i];
        if(s.indexOf(c) == i && s.indexOf(c, i+ 1) == -1 ) return i;
    }
    return -1;
};

// alternate solution from Shirin Setayesh
 function firstUniqueChar(s){
    let characterCounter = new Map()

    for (let i = 0; i < s.length; i++){
        characterCounter.set(s[i], (characterCounter.get(s[i]) || 0) + 1)
    }

    for (let i = 0; i < s.length; i++){
        let value = characterCounter.get(s[i])

        if (value === 1){
            return i
        }
    }

    return -1
 }