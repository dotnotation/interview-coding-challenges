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

// alternate solution from _kapi1
var subsets = function (nums) {
	//Array finalOutput stores all the power sets
	let finalOutput = [];

	// Helper method is a recursive function that call's itself
	const helper = (currentIndex, set) => {
		// Check for base case as stated above
		if (currentIndex >= nums.length) {
			// push the set of current iteration in finalOutput
			finalOutput.push(set);
			return; //Necessary to end the recursion iteration
		}

		//This is the 1st case where we are including the currentIndex number
		// We increment currentIndex and add currentNumber i.e nums[currentIndex] in our set i.e. [...set, nums[currentIndex]]
		helper(currentIndex + 1, [...set, nums[currentIndex]]);

		// This is the second case where we are excluding the currentIndex number
		// We increment currentIndex and our set remains unchanged
		helper(currentIndex + 1, set);
	};
	//1st call to recursive function
	helper(0, []);

	// return our power set stored in finalOutput
	return finalOutput;
};

// alternate from KaziNizamul
var subsets = function(nums) {
	let res=[]                    // the final arr, which we will display
	let auxArr = [], i=0             // global vars
    
    function recur(nums,i,auxArr){
        if(i==nums.length) { res.push(auxArr); return } //operation of recursion will be upto i=n-1
													 // when it will hit, i==n, it will store the computed arr, in the final arr, and break(return)
        
		// take it
        recur(nums, i+1, [...auxArr, nums[i] ] ) //or, we can use 'aux.concat(nums[i])'
		
		// dont take
        recur(nums, i+1, auxArr)
    
    }
    
    recur(nums,i,auxArr) // passing the global variable declared already
    return res        // rerturn the final 2d arr
    
    
};