let fullName = 'Scott Marcus Gilbert';

//Listed my full name

const states = 50;

//Added number of states in the U.S.

let add = 5 + 4


//Added 5+4, checked answer in console.log


function sayHello() {
    alert ('Hello World!');
}
sayHello();


function checkAge(name, age) {
    if(age<21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!")
    }
}
checkAge('Charles', 21);
checkAge('Abbey', 27)
checkAge('James', 18)
checkAge('John', 17)

//Created a function to check the age of people, and make sure they were 21 before entering the webpage

let friends = [
    {
        name: 'Charles',
        age: 21
    },
    {
        name: 'Abby',
        age: 27
    },
    {
        name: 'James',
        age: 18
    },
    {
        name: 'John',
        age: 17
    },
]

let veggies = ['Carrots', 'Peppers', 'Peas', 'Asparagus']

for (let i = 0; i < veggies.length; i++) {
    console.log(veggies[i]);
}


let people  = [
    {
        name: 'Bob',
        age: 14
    },
    {
        name: 'Will',
        age: 50
    },
    {
        name: 'Sam',
        age: 25
    },
    {
        name: 'Holly',
        age: 27
    },
    {
        name: 'Nick',
        age: 18
    },
]

for (let i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}


function getLength(word) {
    if (word.length % 2 === 0) {
        console.log('The world is nice and even!');
    }
        else {
            console.log('The world is an odd place!');
        }
}
getLength("Hello World");