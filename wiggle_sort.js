// takes in an unsorted array of numbers
// reorder it so that num[0] <= num[1] >= num[2] <= num[3]
// basically alternate the higher and lower values
// ex. input: num = [3, 5, 2, 1, 6, 4] = [3, 5, 1, 6, 2, 4]

function wiggleSort(num){
    // iterate through num
    // compare each value and alternate the high and low values
    // even index is less than adjacent element at odd index
    // odd index is greater than adjacent even index
    // swap like in bubble sort
    let swap

    for (let i = 0; i < num.length; i++){
        swap = true
        if (i % 2 === 0 && i > [i + 1]){
            let temp = num[i]
            num[i] = num[i + 1]
            num[i + 1] = temp
            swap = false
        } else if (i % 2 !== 0 && i < [i + 1]){
            let temp = num[i]
            num[i] = num[i + 1]
            num[i + 1] = temp
            swap = false
        }
        if (swap) break
    }
    return num
}