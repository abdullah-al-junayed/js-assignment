// 1.Write a function to convert Celsius to Fahrenheit. The function should take a single argument, which is the temperature in Celsius.

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  
// 2.  Write a function to check if a number is even. The function should take a single argument, which is the number to check.

function isEven(num) {
    return num % 2 === 0;
}

//3. Write a function to sum two numbers. The function should take two arguments, which are the numbers to sum.

function sum(a, b) {
    return a + b;
}

//4. Write a function to find the smallest number in an array. The function should take a single argument, which is the array to search.

function findSmallestNum(arr) {
    let smallest = arr[0]; 
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < smallest) {
        smallest = arr[i]; 
      }
    }
  
    return smallest;
  }

//  5. Write a function to count the number of vowels in a string. The function should take a single argument, which is the string to search.
  function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let count = 0;
  
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
  
    return count;
  }

// 6.  Write a function to get the first element of an array. The function should take a single argument, which is the array.

function getFirstElement(arr) {
    return arr[0];
  }

// 7.  Write a function to check if an array is empty. The function should take a single argument, which is the array.
function isArrayEmpty(arr) {
    return arr.length === 0;
  }

// 8.  Write a function to return the factorial of a number. The function should take a single argument, which is the number.

function factorialize(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorialize(num - 1);
  }

// 9.  Write a function to reverse a string. The function should take a single argument, which is the string to reverse.
function reverseString(str) {
    return str.split("").reverse().join("");
  }

// 10.  Write a function to convert a string to lowercase. The function should take a single argument, which is the string to convert.
function toLowerCase(str) {
    return str.toLowerCase();
  }

// 11.  Write a function to find the length of a string. The function should take a single argument, which is the string.

function stringLength(str) {
    return str.length;
  }

// 12.  Write a function to merge two arrays. The function should take two arguments, which are the arrays to merge.
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
  }

//   13. Write a function to get the last element of an array. The function should take a single argument, which is the array.

function getLastElement(arr) {
    if (arr && arr.length > 0) {
      return arr[arr.length - 1];
    } else {
      return undefined;
    }
  }

// 14.  Write a function to get the first character of a string. The function should take a single argument, which is the string.

function getFirstCharacter(str) {
    return str.charAt(0);
  }

// 15.  Write a function to find the sum of all elements in an array. The function should take a single argument, which is the array.
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }