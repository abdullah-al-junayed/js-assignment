// 1.Create a variable called carName, assign the value Volvo to it.

let carName = "Volvo" ; 




// 2. On one single line, declare three variables with the following names and values:
// firstName = "John"
// lastName = "Doe"
// age = 35



let firstName = "John" ,  lastName = "Doe", age = 35; 

 
//3. Use the correct assignment operator that will 
// result in x being 50 (same as x = x * y). 

x = 10;
y = 5;
x *= y; 

// 4.Use comments to describe the correct data type of the following variables:

let length = 16;// Number 
let lastName = "Johnson";// String 

const x = {
  firstName: "John",
  lastName: "Doe"
};    // Object 


//5. Execute the function named myFunction.

 
 function myFunction() {
//   alert("Hello World!");
}
myFunction();


 
// 6. Create an object called person with name = John, age = 50, Then,
//    access the object to alert("John is 50").

let person ={
    name = "Jhon";
    age = 50;

}
alert("person.name + "is" person.age");

// 7.The <button> element should do something when someone clicks on it. Try to fix it!

function clicks () {
    alert("Registration was completed")
}

// 8.Array Related Question 

// 1. Alert the number of items in an array, using the correct Array property: 

const cars = ["Volvo", "Jeep", "Mercedes"];
alert(cars.length)

// 2. Change the first item of Brand to "Ford".

	const Brand = ["Volvo", "Jeep", "Mercedes"]; 
Brand[0] = "Ford";


// 9. Math Related Problems

// 1. Use the correct Math method to create a random number.
let random = Math.random();

// 2. Use the correct Math method to return the largest number of 10 and 20.

let maxNum = Math.max(10, 20)


// 3. Use the correct Math method to get the square root of 9.

let squroot = Math.sqrt(9); 

//10. comparison operator related problems! 

// 1. Choose the correct comparison operator to alert true, when x is greater than y.
x = 10;
y = 5;
alert(x > y); 

// 2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".

let age = 17; 
alert(age < 18 ? "Too young" : "Old enough");