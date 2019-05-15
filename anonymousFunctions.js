//1. Using the built-in map array function and an anonymous function, 
// square all items in a number array

var numbers = [1, 2, 3, 4];

var square = numbers.map(function(number){
  return Math.pow(number,2);
});

console.log(square); // [1, 4, 9, 16]


//2. Write an IIFE function using an anonymous function
// which sums two numbers and logs the sum out to the console 

(function (a, b) {
    console.log(a + b);
})(2,3);

// 3. Make this function an arrow function:

// function timesTwo(number) {
//   return number * 2
// }

var timesTwo = number => number * 2;
console.log(timesTwo(4));

//or 

var timesTwo1 = (number) => { return number * 2 };
console.log(timesTwo1(4));

