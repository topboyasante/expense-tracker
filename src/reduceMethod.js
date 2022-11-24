const prices = [1,-1,2,3]

/* The function takes in two parameters: A Callback function (that takes in two parameters,accumulator and currentValue) , and a number
(that number is the initialized value of the accumulator parameter),*/
const sum = prices.reduce((accumulator,currentValue)=>{
    /*The Accumulator is initialized, and then the currentValue is set to each element in the array when the function is run.
    We add each value of currentValue to accumulator.
    */
    return accumulator+ currentValue

},0)

console.log(sum)