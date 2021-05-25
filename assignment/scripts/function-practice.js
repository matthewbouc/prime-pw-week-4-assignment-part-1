console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}//end hello()
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello, ${name}!`
} //end helloName()

// Remember to call the function to test
console.log('Test - should say "Hello, X Æ A-12!":', helloName('X Æ A-12'));


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
} //end addNumbers
//call function to test
console.log('Test - should say 3 with inputs from 2,1: ', addNumbers(2,1));


// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3 ){
  return num1 * num2 * num3
}//end multiplyThree()
// call function to test
console.log('Test - return 60 with inputs 10, 2, 3: ', multiplyThree(10,2,3));


// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true; //end if true
  } else {
    return false;
  }// end if false
}//end isPositive()
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {
  if (array.length > 0){
    return array[array.length-1] //end if array exists
  } else {
    return 'undefined' // end if array is empty
  }
}//end getLast
//log array outcomes
testArray = ['cow', 'fish', 'orange', 'taco', 'napkin'];
testArray1 = ['juice'];
testArray2 = [ ];
console.log('testArray: ', testArray);
console.log('testArray1: ', testArray1);
console.log('testArray2: ', testArray2);
console.log('Test for multi item array, log napkin: ', getLast(testArray));
console.log('Test single item array, log juice: ', getLast(testArray1));
console.log('Test empty array, log undefined: ', getLast(testArray2));


// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){
  i = 0;
  for (let x of array){
    if (x === value){
      i++;
    } // end (x === value) conditional
  } // end for of loop
  if (i > 0){
    return true; // if value is found, return true
  } else {
    return false; // if value is not found, return false
  } // end (i > 0) conditional
}// end of find()
//Using testArray from question 6, run find() function.
console.log('Test - log true for orange in testArray: ', find('orange', testArray));
console.log('Test - log false for kites in testArray: ', find('kites', testArray));


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter === string[0]){
    return true; // letter === string[0] conditional
  } else {
    return false;
  } // return false
}// end of isFirstLetter()
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( numArray ) {
  let sum = 0
  // TODO: loop to add items
  for (let x of numArray){
    sum += x;
  } //end for of loop
  return sum;
} // end sumAll()
numbers = [2, 8, 10, 11, 29, 40];
numbers1 = [-50, -15, 0, 10, 25, 30];
console.log('numbers test array', numbers);
console.log('numbers1 test array', numbers1);
console.log('Test - log 100: ', sumAll(numbers));
console.log('Test - log 0: ', sumAll(numbers1));


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function onlyPositives( numArray ){
  let newArray = []
  //loop through numArray and put positive numbers into newArray
  for (let x of numArray){
    if (x > 0){
      newArray.push(x);
    }
  } //end for of loop
  return newArray; // return newArray with onlly positive numbers
}

let noPos = [-14, -10, -100, -3, 0] // test array
console.log('noPos test array, ', noPos);
console.log('Test - log numbers array and new array matching numbers ', numbers, onlyPositives( numbers ));
console.log('Test - log numbers1 array and new array with 10,25,30', numbers1, onlyPositives( numbers1 ));
console.log('Test - log noPos array and an empty array: ', noPos, onlyPositives( noPos ));

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!


//  A Narcissistic Number is a positive number which is the
//  sum of its own digits, each raised to the power of the number
//  of digits in the number.  Return true if a number is narcissistic
//  or false if a number is not narcissistic.  Use base 10.


function narcissistic( number ){
  // convert the number to a string
  let numberString = number.toString();
  // determine the number of digits (to which each digit will be raised to the power of)
  let power = numberString.length;
  let newNumberString = [];  // will contain each digit to its power
  let sumDigits = 0; // will be used to sum each number in newNumberString
  // loop through each digit and raise it to the appropriate power, then push it to new array.
  for (let x of numberString){
    newNumberString.push(x ** power);
  } // end for of loop
  // Loop through newNumberString and sum the digits.
  for (let y of newNumberString){
    sumDigits += y;
  }
  // determine if the number is narcissistic(true) or not(false)
  return sumDigits === number;
} // end narcissistic()

console.log('The number 153 is narcissistic: 1^3 (1) + 5^3 (125) + 3^3 (27) = 153 ', narcissistic( 153 ));
console.log('Number 1634 is narcissistic 1^4 + 6^4 + 3^4 + 4^4 = 1634, ', narcissistic( 1634 ));
console.log('Number 1635 is not narcissistic: 1^4 (1) + 6^4 (1,296) + 3^4 (81) + 5^4 (625) = 2003', narcissistic(1635));
