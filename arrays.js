// Create an array of colours
// Loop through the array using the for loop and log the colour to the console
// Loop through the array using the forEach loop and log the colour to the console

var colours = ['red', 'green', 'blue'];
for (let i = 0; i < colours.length; i++) {
    console.log(colours[i]);
}

colours.forEach(function(colour) {
    console.log(colour);
});


// Write a function that will rotate an array 
// to the right by a certain number of "steps".  

function arrayRotate(arr, count) {
    count++;
    count -= arr.length * Math.floor(count / arr.length)
    arr.push.apply(arr, arr.splice(0, count))
    return arr
}

console.log(arrayRotate([1, 2, 3, 4, 5], 2));


// Write a function that uses the native Array .reduce method 
// to sum up an array of numbers, but starting at 50. 

function sumReduce(array) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    console.log(array.reduce(reducer, 50));
}

sumReduce([1, 2, 3, 4, 5]);

// Create a function that takes a number as an argument and returns 
// an array.
// The first element of the array should be 0, 
//   and then each element should increase by 1 until
//   it reaches the input number. 
// Then, each element should count back down to 0. 

function f(number) {
    let newArray = [];
    for (let i = 0; i <= number; i++) {
        newArray[i] = i;
    }
    let n = number;
    for (let i = number + 1; i < 2 * n + 2; i++) {
        newArray[i] = number--;
    }
    console.log(newArray);
}

// Write a function zooInventory that takes a zoo's 
// inventory of animals (represented using nested arrays)
// and returns an array of strings that describe 
// each animal's name, species, and age.


var myZoo = [
    ["King Kong", ["gorilla", 42]],
    ["Nemo", ["fish", 5]],
    ["Punxsutawney Phil", ["groundhog", 11]]
];

function zooInventory(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i][0] + " " + arr[i][1][0] + "is" + " " + arr[i][1][1])
    }
}

zooInventory(myZoo);