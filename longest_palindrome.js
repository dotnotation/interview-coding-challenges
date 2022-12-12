// takes in a string(s)
// palindrome is the same backwards and forwards
// find the longest substring that is a palindrome
// can be letters and numbers
// ex. "babab" => "bab" or "aba"

function longestPalindrome(s){
    // since it could be uppercase letters, lowercase everything first(turns out you can't do this)
    // need a variable of the substring to return
    // iterate through the string 
    // two pointer method
    // compare left side of string to right side of string 
    // however I think the start needs to be at the middle and work out from there
    // what is considered the middle if the string is even in length?
    // need an even and odd length check 
    // nested loop? 
    // there can be multiple palindromes so need to keep track of longest
    if (s.length < 1 || s === null) return ''

    let result = ''
    
    for (let i = 0; i < s.length; i++){
        let oddPal = drome(s, i, i)
        let evenPal = drome(s, i - 1, i)
        
        if (oddPal.length > result.length) result = oddPal
        if (evenPal.length > result.length) result = evenPal
    }

   return result 
}

function drome(s, left, right){
    let i = 0

    while (s[left - i] && s[left - i] === s[right + i]){
        i++
    }
    i--

    return s.slice(left - i, right + i + 1)
}

// Time: O(n^2)
// Space: O(1)


// solution from Andy Gala
function longestPalindrome(s){
    let max = [0, 1]
    // even one character can be a palindrome

    for (let i = 0; i < s.length; i++){
        let even = drome(s, i - 1, i)
        let odd = drome(s, i - 1; i + 1)
        let current = odd[1] - odd[0] > even[1] - even[0] ? odd : even

        max = max[1] - max[0] > current[1] - current[0] ? max : current
    }
    return s.slice(max[0], max[1])
}

function drome(s, left, right){
    while (left >= 0 && right < s.length){
        if (s[left] !== s[right]) break
        left --
        right ++
    }

    return [left + 1, right]
}