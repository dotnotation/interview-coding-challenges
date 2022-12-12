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
    // nested loop? 
    s = s.toLowerCase()

    let result = ""
    let left = s[0]
    let right = s[s.length - 1]
    
}