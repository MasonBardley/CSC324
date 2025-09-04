//Mason Bradley

//looping a triangle
/*Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
It may be useful to know that you can find the length of a string by writing .length after it.

let abc = "abc";
console.log(abc.length);
// → 3
Most exercises contain a piece of code that you can modify to solve the exercise. Remember that you can click code blocks to edit them.*/

//Solution

for(let number = "#"; 
  number.length <= 7; 
  number += "#") {
  console.log(number)}

//FizzBuzz
/*Write a program that uses console.log to print all the numbers from 1 to 100, 
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number,
 and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers
 that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for 
 numbers divisible by only one of those).*/

//Solution

for(let count = 1; count <= 100;
  count += 1) {
  if(count % 3 == 0) {
    console.log("Fizz")
  } else {if(count % 5 == 0) {
    console.log("Buzz")
  } else {
    console.log(count)
  }}
}

//Modified Solution

for(let count = 1; count <= 100;
  count += 1) {
    if(count % 3 == 0 & count % 5 == 0) {
      console.log("Fizzbuzz")
    } else if(count % 3 == 0) {
    console.log("Fizz")
  } else if(count % 5 == 0) {
    console.log("Buzz")
  } else {
    console.log(count)
  }
}

//Chessboard
/*Write a program that creates a string that represents an 8×8 grid, 
using newline characters to separate lines. At each position of the grid 
there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size = 8 
and change the program so that it works for any size, 
outputting a grid of the given width and height.*/

//Solution
/* The following solution will accept a number for its size that will make up the height 
and width of the given board. I created numerical variables row and col to sort the board 
while the variables board and str acted as character vectors storing the actual spaces and #'s*/

const size = 8
let board = ""

for (let row = 0; row < size; row++) {
  let str = ""
  for (let col = 0; col < size; col++) {
    if ((row + col) % 2 === 0) {
      str += " "
    } else {
      str += "#"
    }
  }
  board += str + "\n" 
}
console.log(board)

//Alternative Board

const size = 4
let board = ""

for (let row = 0; row < size; row++) {
  let str = ""
  for (let col = 0; col < size; col++) {
    if ((row + col) % 2 === 0) {
      str += " "
    } else {
      str += "#"
    }
  }
  board += str + "\n" 
}
console.log(board)


