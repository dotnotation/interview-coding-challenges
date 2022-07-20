// stock_prices = [10, 7, 5, 8 11, 9] 10 would be opening price and time would be zero
// get_max_profit(stock_prices)
// stock_prices[60] = 500 means that stock cost $5000 at 10:30am
// variable assignment, accessing elements in an array by index, and if/else statements (Constants factors within a loop are linear scale) are O(1) constant run time
// searching array is O(n)

// What if the price goes down all day? In that case, the best profit will be negative.

const stock_prices = [10, 7, 5, 8, 11, 9] 

function get_max_profit(stock_prices){
    // iterate through stock_prices
    // compare the previous value to the next value
    // find the lowest value and the highest value
    // two pointers
    if (stock_prices.length < 2) return "Error, you need at least two values to compare."

    let lowest = stock_prices[0]
    let highest = 0

    for (i = 0; i < stock_prices.length; i++) {
        if (stock_prices[i] <= lowest){
            lowest = stock_prices[i]
            console.log("lowest", lowest, "highest inside first loop", highest)
        }
        if (stock_prices[i] >= highest){
            highest = stock_prices[i]
            console.log("highest", highest)
        }
    }

    return `You should buy at ${lowest} and sell at ${highest}. Your profit will be $${highest - lowest}`
}

get_max_profit(stock_prices)