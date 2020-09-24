const hobbies = ['Running', 'reading', 'watching shows', 'sleeping'];
// push adds new elements to the array 
hobbies.push('walking')
hobbies.unshift('Coding') //adds an item to an array from the front
// you can remove an item from the array from the end of the array
const poppedValue = hobbies.pop()

console.log(poppedValue)
console.log(hobbies)

hobbies[1] = 'Watch Netflix';
hobbies[7] = 'anime'
console.log(hobbies)

hobbies.splice(1, 0, 'Good food');
// the first num starts at the first index and then you tell it how many you want to delete
console.log(hobbies)

hobbies.splice(2);
//single number, deletes everything but up to that index
console.log(hobbies)

const testResults = [1, 4.5, 4.3, 5, 1, 2];
const storedResults = testResults.slice(-3, -1);
//slice can also select ranges of an array

testResults.push(6.5);

console.log(testResults, storedResults);