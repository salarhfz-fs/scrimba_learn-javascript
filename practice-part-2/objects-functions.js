const person = {
    name: 'Salar',
    age: 30,
    country: 'Iran'
};

function logData(person) {
    console.log(`${person.name} is ${person.age} years old and lives in ${person.country}`);
}

logData(person);