// stockPrices = [10, 7, 5, 8 11, 9] 10 would be opening price and time would be zero
// getMaxProfit(stockPrices)
// stockPrices[60] = 500 means that stock cost $5000 at 10:30am
// variable assignment, accessing elements in an array by index, and if/else statements (Constants factors within a loop are linear scale) are O(1) constant run time
// searching array is O(n)

// What if the price goes down all day? In that case, the best profit will be negative.

const stockPrices = [10, 7, 5, 8, 11, 9] 

function getMaxProfit(stockPrices){
    // iterate through stockPrices
    // compare the previous value to the next value
    // find the lowest value and the highest value
    // two pointers
    if (stockPrices.length < 2) return "Error, you need at least two values to compare."

    let lowest = stockPrices[0]
    let highest = 0

    for (i = 0; i < stockPrices.length; i++) {
        if (stockPrices[i] <= lowest){
            lowest = stockPrices[i]
            console.log("lowest", lowest, "highest inside first loop", highest)
        }
        if (stockPrices[i] >= highest){
            highest = stockPrices[i]
            console.log("highest", highest)
        }
    }

    return `You should buy at ${lowest} and sell at ${highest}. Your profit will be $${highest - lowest}`
}

getMaxProfit(stockPrices)

// solution from interview cake transcribed into JS

function getMaxProfit(stockPrices){
    if (stockPrices.length < 2) return "Getting a profit requires at least 2 prices."

    let minPrice = stockPrices[0]
    let maxProfit = stockPrices[1] - stockPrices[0]

    for (i = 0; i < stockPrices.length; i++){
        let currentPrice = stockPrices[i]

        let potentialProfit = currentPrice - minPrice

        maxProfit = Math.max(maxProfit, potentialProfit)

        minPrice = Math.min(minPrice, currentPrice)
    }

    return maxProfit
}
