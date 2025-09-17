//Exercises
//The sum of a range
/*The introduction of this book alluded to the following as a nice way to compute 
the sum of a range of numbers:*/

console.log(sum(range(1, 10)));

/*Write a range function that takes two arguments, start and end, and returns an 
array containing all the numbers from start up to and including end.*/

//Solution

/*An empty array is created by the arr variable before the function begins checking
which of the given values is larger than the other. If the start is smaller, it will add
up, and vice versa. The start value will be the first inserted into the array, and every
value that becomes apart of "the count" will be added afterward until the for loop reaches
the provided end value. 
*/

function range(start, end) {
    let arr = [];
    if(start < end) {
        for(let count = start; count <= end; count++) {
        arr.push(count)
    } } else if(start == end) {
        return start
    } else {
        for(let count = start; count >= end; count += -1) {
        arr.push(count)
    } } return arr
}
console.log(range(1, 10));
console.log(range(5, 2));

/*Next, write a sum function that takes an array of numbers and returns the sum of 
these numbers. Run the example program and see whether it does indeed return 55.*/

//Solution

/*Note: For future assignments, would you like me to let the original function be 
defined earlier in the assignment or to redefine it with each problem?*/

function range(start, end) {
    let arr = [];
    if(start < end) {
        for(let count = start; count <= end; count++) {
        arr.push(count)
    } } else if(start == end) {
        return start
    } else {
        for(let count = start; count >= end; count += -1) {
        arr.push(count)
    } } return arr
}

function sum(array) {
    let total = 0;
    for (let count of array) {
        total = total + count;
} return total
}
console.log(sum(range(1, 10)))

/*As a bonus assignment, modify your range function to take an optional third argument 
that indicates the “step” value used when building the array. If no step is given, 
the elements should go up by increments of one, corresponding to the old behavior. 
The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure this also 
works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].*/

//Solution

/*This was a simple change where I just replaced step where it was applicable. While my code
does work without a given step variable, it errors when a non-applicable step is input such as 
console.log(range(5, 2, 1)). I decided against figuring out how to solve that problem because
it seemed outside of the problem's scope, but figured it was worth noting. 
*/

function range(start, end, step = 1) {
    let arr = [];
    if(start < end) {
        for(let count = start; count <= end; count += step) {
        arr.push(count)
    } } else if(start == end) {
        return start
    } else {
        for(let count = start; count >= end; count += step) {
        arr.push(count)
    } } return arr
}
console.log(range(1, 10))
console.log(range(1, 10, 2))
console.log(range(50, 25, -5))

//Reversing an array
/*Arrays have a reverse method that changes the array by inverting the order in which its 
elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. 
The first, reverseArray, should take an array as its argument and produce a new array that 
has the same elements in the inverse order. The second, reverseArrayInPlace, should do what 
the reverse method does: modify the array given as its argument by reversing its elements. 
Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, 
which variant do you expect to be useful in more situations? Which one runs faster?*/

//Solution

/*The following function creates a new empty array, then uses a for loop to work backwards from the
array's index length to rearrange the original array backwards. 
*/

function reverseArray(array) {
    let nArray = [];
    for(let i = array.length - 1; i >= 0; i--) {
        nArray.push(array[i])
    } return nArray
}
let myArray = ["A", "B", "C"];

console.log(reverseArray(myArray));

/*The function for the array: [1, 2, 3, 4, 5] begins by creating a variable called last that tracks 
the index of the array that ends at 4, which is similarly tracked in the half variable at 2. The 
for loop counts up from the beginning of the index at 0, and continues until it reaches the half 
variable. Inside, it holds i's original value before swapping i with the last value, and closing out
by decreasing the last value by one. The for loop concludes by increasing i by 1, and it will continue,
as previously stated, until i is equal to the half value.
*/

function reverseArrayInPlace(array) {
    last = array.length - 1;
    half = Math.floor((last) / 2);
    for(let i = 0; i <= half; i++) {
        let hold = array[i];
        array[i] = array[last];
        array[last] = hold;
        last--
    } return array
}
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

