// given an array with two integers that add up to the target
// another integer as a target
// return the index that add up to the target

function sum(arr, target){
    // if the array length is not 2 
    if (arr.length < 2) return new Array(0)


    for (let i = 0; i < arr.length - 1; i++){
        for (let j = 1; j < arr.length; j++){
            console.log(arr[i] + arr[j])
            if (arr[i] + arr[j] === target){
                return `${i}, ${j}`
            } 
        }
    }
}