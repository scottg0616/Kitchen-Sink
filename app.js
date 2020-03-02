let fullName = 'Scott Marcus Gilbert';

//Listed my full name

const states = 50;

//Added number of states in the U.S.

let add = 5 + 4


console.log(add);

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