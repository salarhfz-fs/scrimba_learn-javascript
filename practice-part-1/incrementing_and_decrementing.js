let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable
function add3Points() {
    myPoints += 3;
}
function remove1Point() {
    myPoints -= 1;
}


// Call the functions to that the line below logs out 10
add3Points(); // 6
add3Points(); // 9
add3Points(); // 12
remove1Point(); // 11
remove1Point(); // 10
console.log(myPoints)