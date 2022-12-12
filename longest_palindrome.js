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
    // nested loop? 
    // there can be multiple palindromes so need to keep track of longest
    s = s.toLowerCase()

    let result = ""
    let middle = Math.floor(s.length / 2) 
    let left = middle - 1
    let right = middle + 1
    let temp = [(s[middle])]
    console.log(temp)
    
    while (s[left] === s[right]){
        console.log(left, right)
        temp = temp.push(s[left])
        temp = temp.pop(s[right])
        console.log(temp)

    }
}