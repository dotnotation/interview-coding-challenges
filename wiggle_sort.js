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

    for (let i = 0; i < num.length - 1; i++){
        // want num.length - 1 so we don't go out of bounds
        if (i % 2 === 0){
            if (num[i] > num[i + 1]){
                // remember what you are comparing
                // previously I was comparing index
                let temp = num[i]
                num[i] = num[i + 1]
                num[i + 1] = temp
            }
        } else if (i % 2 !== 0){
            if (num[i] < num[i + 1]){
                let temp = num[i]
                num[i] = num[i + 1]
                num[i + 1] = temp
            }
        }
    }
    return num
}