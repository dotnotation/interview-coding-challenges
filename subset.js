// accepts and array of numbers
// numbers are unique
// return all possible sets of number combinations
// no duplicate sets
// returns an array of arrays
// ex. Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

function subsets(nums){
    // variable to store results
    // maybe use recursion?
    const results = [[]]
    //iterate through array
    // iterate first number against all other numbers and then remove that number
    for (let i = 0; i < nums.length; i++){
        for (let j=0; j < results.length; j++){
            results.push([...results[j], nums[i]])
        }
    }
    return results
}