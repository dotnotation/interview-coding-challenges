// takes in a number
// convert an integer to a roman numeral
// store a key value pair of roman numeral and integer
// romanToNumberMapping is a better name for const
// look at docstrings for comments

function integerToRoman(num){
    const roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }

    // need a variable to store the converted integer
    // the datatype is a string
    let converted = ''

    for (i in roman){
        // need to compare num to each key
        // find the largest number that is near the num
        while (num >= roman[i]){
            converted += i
            // assign the key to the converted variable
            // then need to subtract that amount from num
            num -= roman[i]
        }
    }

    return converted
}