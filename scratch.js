console.log("hello");

console.log("Rama".length)

const Text = "Hello! "
console.log(Text.repeat(3))

let str = "Billy Bagged a Buffalo!"
let bCount = 0

//array notes :P

let arrays = [[1, 2, 3], [4, 5], [6]];

let newArray = arrays.reduce((currChar, nextChar) => currChar.concat(nextChar))
console.log(newArray)

// 9/30

class Box {
  constructor(color) {
    this.color = color
  }
}

let redBox = new Box("red")
console.log(redBox)


let myItems = []
myItems.push(1, 2, 3)
console.log(myItems)

console.log(myItems.indexOf(2))


let myNumbs = []
myNumbs.push(1, 2, 3, 4, 5)
console.log(myNumbs.indexOf(6))
let x = 6
if(myNumbs.indexOf(x) === -1) {
    myNumbs.push(x)
} console.log(myNumbs)

const beasts = ["horse", "cat", "donkey", "toad", "fish", "dragon"]
console.log(beasts[Math.floor(6 * Math.random())])



