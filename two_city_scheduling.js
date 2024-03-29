// takes in a cost array of arrays [[]]
// each array has a pair of numbers
// the first number is the cost of flying 1st person to city a
// the second number is the cost of flying 1st person to city b
// return the minimum cost to fly every person to a city so that every person arrives in a city
// ex. Input: costs = [[10,20],[30,200],[400,50],[30,20]]
// Output: 110
// Explanation: 
// The first person goes to city A for a cost of 10.
// The second person goes to city A for a cost of 30.
// The third person goes to city B for a cost of 50.
// The fourth person goes to city B for a cost of 20.

// The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.

// this doesn't account for dividing people equally
function twoCityScheduling(costs){
    let total = 0

    for (let person of costs){
        person[0] >= person[1] ? total += person[1] : total += person[0]
    }

    return total
}

function twoCityScheduling(costs){
    // sort people by cost
    // set a cap to have cost / 2 to divide people equally between cities
    // set a counter for each city
    // can only add to a city if cap hasn't been met

    costs.sort((a, b) => {
        return Math.abs(b[0] - b[1]) - Math.abs(a[0] - a[1])
    })

    let total = 0
    let cityA = 0
    let cityB = 0
    let cap = costs.length/2

    for (let i = 0; i < costs.length; i++){
        let costA = costs[i][0]
        let costB = costs[i][1]

        if (costA <= costB){
            if (cityA < cap){
                total += costA
                cityA++
            } else {
                total += costB
                cityB++
            }
        }

        else {
            if (cityB < cap){
                total += costB
                cityB++
            } else {
                total += costA
                cityA++
            }
        }
    }
    return total
}

// Time: O(n log n) the sorting is costly
// Space: O(1)