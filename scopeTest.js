// 1. Create a function which has a for loop in it.
// Declare a variable with var inside the for loop. 
// Log the variable to the console after the loop. What happened? 

function scopeTest()
{
    for (var i = 0; i < 10; i++) {
      console.log(i);
    }
    console.log(i); //10
}

scopeTest();



//2. Add a variable declared with let to the for loop. 
// Log the variable to the console after the loop. What happened? 

function scopeTest1()
{
    for (let i = 0; i < 10; i++) {
      console.log(i);
    }
    console.log(i); //i is not defined
}

scopeTest1();

// 3. Create a variable outside of the function.
// Log the variable to the console inside the function.
// What happened? 

var j = 7;
function scopeTest3()
{
  console.log(j);
}

scopeTest3(); //7

// 4. Create a variable inside the function. 
// Log the variable to the console outside the function.
// What happened?

function scopeTest4()
{
    var number = 6;
}
  
console.log(number);//number is not defined