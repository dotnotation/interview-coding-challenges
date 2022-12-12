// takes in a string(s)
// palindrome is the same backwards and forwards
// find the longest substring that is a palindrome
// can be letters and numbers
// ex. "babab" => "bab" or "aba"

function longestPalindrome(s){
    // since it could be uppercase letters, lowercase everything first
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
    
    s = s.toLowerCase()

    let result = ''
    
    for (let i = 0; i < s.length; i++){
        let oddPal = drome(s, i, i)
        let evenPal = drom(s, i - 1, i)
        
        if (oddPal > result.length) result = oddPal
        if (evenPal > result.length) result = evenPal
    }

   return result 
}

function drome(s, left, right){
    
}