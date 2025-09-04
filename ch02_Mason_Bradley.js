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
/*Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).*/

//Solution

let count = 1;
for(count <= 100;
  count += 1
  if(count == for(let numb = 0;
    numb <= 100;
    numb += 3) {console.log(numb)}) {
      console.log("Fizz")
    }
) 

