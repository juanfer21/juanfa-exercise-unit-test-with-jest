// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum };

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


function fromDollarToYen(dollar){
    let euro = dollar / oneEuroIs.USD
    return euro * oneEuroIs.JPY
}

function fromEuroToDollar(euro){
    return euro * oneEuroIs.USD
}

function fromYenToPound(yen){
    let euro = yen / oneEuroIs.JPY
    return euro * oneEuroIs.GBP
}

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };
