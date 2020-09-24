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

// const hobbies = ['Cooking', 'Sports'];
const personalData = [30, 'Max', {moreDetail: []}];

const analyticsData = [[1, 1.6], [-5.4, 2.1]];

// look through each number in the array
for (const data of analyticsData) {
    for (const dataPoint of data) {
        console.log(dataPoint);
    }
}

// arrays are index bases
console.log(personalData[1]);
//INDEXES START AT 0