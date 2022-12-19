// takes in an array of numbers
// move all 0's to the end 
    // maintain the relative order of the non-zero elements
// can NOT make a copy of the array
// ex. [0, 1, 0, 3, 12] -> [1, 3, 12, 0, 0]

function moveZeroes(nums){
    if (nums.length === 0) return undefined
    if (nums.length === 1) return nums

    let placeNonZeroes = 0
    // going to take any non zero nums and put them at the beginning of the array
    // iterate through and keep track of the index and moving the nums up
    // once you reach a zero, you can turn all the other nums to zero
    for (let i = 0; i < nums.length; i++){
        if (nums[i] !== 0){
            nums[placeNonZeroes] = nums[i]
            placeNonZeroes++
        } 
    }

    for (let i = placeNonZeroes; i < nums.length; i++){
        // start at the place we left off with placeNonZeroes
        nums[i] = 0
    }
    return nums
}

// Big O
    // Time: O(n)
    // Space: O(1)

// Other Solutions:
var moveZeroes = function(nums) {
    let count = nums.length;
    for (let i = 0; i < count; ) {
        if(nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            count--;
        }
        else {
            i++;
        }
    }
};

function moveZeroes(nums) {
    let left = 0;
    let right = nums.length - 1;

    for (let i = 0; i <= right; i++) {
        if (nums[i] !== 0) {
            [nums[i], nums[left]] = [nums[left], nums[i]];
            left++;
        }
    }

    return nums;
}
