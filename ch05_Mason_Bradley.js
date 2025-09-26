//Exercises
//Flattening
/*Use the reduce method in combination with the concat method to “flatten” an 
array of arrays into a single array that has all the elements of the original arrays.*/

//Solution

/*The arrays are added to the newArray one by one. The current character and the next 
character are selected by the reduce function, then combined by the concat function, and
this continues until each character from the original list of arrays is placed into
newArray.
*/

let arrays = [[1, 2, 3], [4, 5], [6]];
let newArray = arrays.reduce((curr, next) => curr.concat(next))
console.log(newArray)

let arrays2 = [[2, 4, 5], 6, [1, 3]]
let newArray2 = arrays2.reduce((curr, next) => curr.concat(next))
console.log(newArray2)


//Your own loop
/*Write a higher-order function loop that provides something like a for loop statement. 
It should take a value, a test function, an update function, and a body function. Each 
iteration, it should first run the test function on the current loop value and stop if 
that returns false. It should then call the body function, giving it the current value, 
and finally call the update function to create a new value and start over from the beginning.

When defining the function, you can use a regular loop to do the actual looping.
*/

//Solution

/*The function is built around a for loop with interchangeable variables and some other additions.
For one, the test function specifically calls for the value of n, and the update function has to 
replace n at the end of each loop while also calling n. 
*/

function loop(n, test, update, body) {
    for(n; test(n); n = update(n)) {
        body(n)
    }
}
loop(3, n => n > 0, n => n - 1, console.log);

//Everything
/*Arrays also have an every method analogous to the some method. This method returns true 
when the given function returns true for every element in the array. In a way, some is a 
version of the || operator that acts on arrays, and every is like the && operator.

Implement every as a function that takes an array and a predicate function as parameters. 
Write two versions, one using a loop and one using the some method.
*/
function every(array, test) {
    
}

console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));


