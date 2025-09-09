//Exercises
//Minimum
/*The previous chapter introduced the standard function Math.min that returns its 
smallest argument. We can write a function like that ourselves now. Define the function 
min that takes two arguments and returns their minimum.*/

///Solution

 let min = function(x, y) {
    if (x > y) {
        return y
    } else return x 
 }

//Examples:
 console.log(min(0, 10));
console.log(min(0, -10));

 //Recursion
/*We’ve seen that we can use % (the remainder operator) to test whether a 
number is even or odd by using % 2 to see whether it’s divisible by two. 
Here’s another way to define whether a positive whole number is even or odd:

Zero is even.

One is odd.

For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. 
The function should accept a single parameter (a positive, whole number) 
and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a 
way to fix this?*/

//Solution

/*This function first checks to see if the provided parameter (n) is negative, then immediately 
corrects it. Next, it subtracts 2 from n, which both allows the function to check if the number 
is odd or even, and allows isEven to become a recursive function that will keep cycling until
the value is either 0 or -1. 
*/

let isEven = function(n) {
    if (n < 0) {
        n = -n
    };
    n = n - 2;
    if (n < 0) {
        return "odd"
    } else if (n === 0) {
        return "even"
    } else return isEven(n)
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

//Bean counting
/*You can get the Nth character, or letter, from a string by writing [N] after the string 
(for example, string[2]). The resulting value will be a string containing only one character 
(for example, "b"). The first character has position 0, which causes the last one to be found 
at position string.length - 1. In other words, a two-character string has length 2, and its 
characters have positions 0 and 1.

Write a function called countBs that takes a string as its only argument and returns a number 
that indicates how many uppercase B characters there are in the string.*/

//Solution 1

/*The function first creates variables for the number of B's (starting at 0) and the number 
of characters present in the provided parameter (ranword). Then, it runs a for loop that 
counts the length of ranword, checking each character to see if it is "B". 
*/

let countBs = function(ranWord) {
    let width = ranWord.length;
    let bees = 0;
    for (let count = 0; count < width; count++) {
        if (ranWord[count] === "B" ) {
            bees++
        }
    } 
    if (bees === 0) {
        return "No B's"
    }
    return bees
}

console.log(countBs("BOB"))

/*Next, write a function called countChar that behaves like countBs, except it takes a second 
argument that indicates the character that is to be counted (rather than counting only uppercase 
B characters). Rewrite countBs to make use of this new function.*/

//Solution 2

/* This functions similarly to the previous solution, with the exception that the character
variable is interchangeable. */

let countChar = function(ranWord, char) {
    let width = ranWord.length;
    let chars = 0;
    for (let count = 0; count < width; count++) {
        if (ranWord[count] === char ) {
            chars++
        }
    } 
    return chars
}

console.log(countChar("kakkerlak", "k"))
