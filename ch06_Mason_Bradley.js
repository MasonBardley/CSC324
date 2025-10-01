//Chapter 6 Homework

//Groups
/*The standard JavaScript environment provides another data structure called Set. Like an 
instance of Map, a set holds a collection of values. Unlike Map, it does not associate other 
values with those—it just tracks which values are part of the set. A value can be part of a set 
only once—adding it again doesn’t have any effect.

Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has 
methods. Its constructor creates an empty group, add adds a value to the group (but only if it 
isn’t already a member), delete removes its argument from the group (if it was a member), and has 
returns a Boolean value indicating whether its argument is a member of the group.

Use the === operator, or something equivalent such as indexOf, to determine whether two values are 
the same.

Give the class a static from method that takes an iterable object as its argument and creates a 
group that contains all the values produced by iterating over it.
*/

//Solution

/*Admittedly, I started working on the homework after class today, so I was not able to ask about
this in class. But I cannot figure out how to use static methods in the code even after reading the
textbook and consulting ChatGPT. For future reference, I will try to attempt the problems before class,
but this was what I was able to figure out on my own.

The constructor takes a given array and attaches it to the new object with the this.array. It continues
to the add method where it will check if a variable is already inside of the array before adding, and if 
it is not, then it will push that variable. The delete method does something similar, but through a
filter command where it will replace the array with the exception of the given variable, toDelete.
The has method is the simplest, and uses a Boolean expression to ask whether or not a variable is 
inside of the array. ChatGPT suggested that the static method should encapsulate the entirety of the
function, but I did not understand it. 
*/

class Group {
  constructor(array) {
    this.array = array
  };
  add(toAdd) {
    if(this.array.indexOf(toAdd) === -1) {
        this.array.push(toAdd)
    }
  };
  delete(toDelete) {
    if(this.array.indexOf(toDelete) === -1) {
        this.array = this.array.filter(array => array !== toDelete)
    }
  };
  has(toCheck) {
    return (this.array.indexOf(toCheck) === 1)
  }
  static 
}

//ChatGPT Discussion

/*
You said:
without directly fixing this code and without explaining other concepts, can you tell me how to 
use static functions by explaining what is wrong with the given code 

class Group {
  constructor(array) {
    this.array = array
  };
  static add(toAdd) {
    if(this.array.indexOf(toAdd) === -1) {
        this.array.push(toAdd)
    }
  };
  static delete(toDelete) {
    if(this.array.indexOf(toDelete)) {
        this.array = this.array.filter(array => array !== toDelete)
    }
  };
  static has(toCheck) {
    return this.array.indexOf(toCheck) === 1
  }
}
ChatGPT said:
The main issue here is how static functions interact with this.

Static methods do not operate on instances of a class; they belong to the class itself.

In your code, this.array inside the static methods tries to access an instance property, but 
static methods cannot see this.array from an instance.

So, this.array inside add, delete, and has won’t work the way you expect — this in a static 
method refers to the class itself, not any object created by new Group().

Also, some minor logic issues exist (like checking indexOf(toDelete) without comparing to -1), 
but the main static-related problem is that static methods can’t directly access this.array from 
instances.

You said:
so the simplest solution would be to have one static function in this code? without using this 
problem as an example, could you show how that might be structured and explain each part
ChatGPT said:
Yes! The simplest way to use a static function is to have it operate on data that belongs to the 
class itself, not on instance properties. Here's a clean structure:

class Calculator {
  // A static property to store a value
  static pi = 3.14159;

  // A static method to use that property
  static areaOfCircle(radius) {
    return Calculator.pi * radius * radius;
  }
}

// Using the static method
console.log(Calculator.areaOfCircle(5)); // 78.53975
Explanation:

static pi = 3.14159; → This property belongs to the class, not an instance. You access it 
via the class name.

static areaOfCircle(radius) → This method is static, so it can be called directly on the class.

Calculator.pi inside the method → Static methods access other static properties or methods 
through the class name.

Calculator.areaOfCircle(5) → Call the static method without creating an instance.

Key takeaway: Static methods operate at the class level, not on individual objects created with new.

If you want, I can show a slightly more advanced pattern where the class can track multiple 
items statically. That’s a neat way to combine static methods with collections. Do you want me to?*/


//Examples

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false