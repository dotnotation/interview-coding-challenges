// takes in an integer(numRows)
// return the first numRows of Pascal's triangle
// Pascal's triangle: each number is the sum of the two numbers directly above it
// ex. Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

function pascalTriangle(numRows){
    // array of numRows size
    // row[0] = 1
    // row[row.length - 1] = 1
    // the first and last element in each array is always 1
    // previous array should be the size of i + 1
    // need to be able to look at previous row which would be i - 1
    // then need to access each element in the previous row via j and j - 1
    let result = new Array(numRows)

    for (let i = 0; i < numRows; i++){
        let row = new Array(i + 1)
        row[0] = 1
        row[row.length - 1] = 1
        
        for (let j = 1; j < row.length - 1; j++){
            // start j at 1 because we know the first value is going to be 1
            // j < row.length - 1 because we already have the last value which is also 1
            let previous = result[i - 1]
            row[j] = previous[j] + previous[j - 1]
            console.log("row", row, "previous", previous)
        }
        result[i] = row
    }
    return result
}
// Time: O(n^2)