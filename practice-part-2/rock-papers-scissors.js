let hands = ["rock", "paper", "scissor"];

// Create a function that returns a random item from the array

function getRandomInRange(min = 0, max = 2) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(hands[getRandomInRange()]);
console.log(hands[getRandomInRange()]);
console.log(hands[getRandomInRange()]);
console.log(hands[getRandomInRange()]);
console.log(hands[getRandomInRange()]);
console.log(hands[getRandomInRange()]);
console.log(hands[getRandomInRange()]);
console.log(hands[getRandomInRange()]);
