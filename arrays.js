const numbers = [1, 2, 3, 4, 5, 6]
console.log(numbers)

// const moreNumbers = new Array('Hi', 'Welcome'); //[]
// const moreNumbers = new Array(1, 2, 3, 4, 5);
// const moreNumbers = new Array(5);
// //empty array with a fixed length if you pass a single number 
// //instead of an array with a passing single num
// console.log(moreNumbers);

// const yetMoreNum = Array.of(1, 2)
// console.log(yetMoreNum)

const listItems = document.querySelectorAll('li');
console.log(listItems) //returns back a node list 

const arrayListItems = Array.from(listItems); //splits the word into characters
console.log(arrayListItems);