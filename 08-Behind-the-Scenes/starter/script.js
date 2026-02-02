'use strict';
/*
function calcAge(birthYear){
    const age = 2037 - birthYear;

    function printAge(){
        let output = `${firstName}, are ${age}, born in ${birthYear}`;
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996){
           var millenial = true;
           //New vatiable with same name as outer scopes variable
           const firstName = 'Steven';
            const str = `Oh and you are a millenial, ${firstName}`;
            console.log(str);

            function add(a, b){
                return a + b;
            }
            //Reassigning outer scopes variable
            output = 'New output';
        }
        //console.log(str)
        console.log(millenial);
        //add(2,3);
        console.log(output);
    }
    printAge();

    return age;
}

const firstName = 'Jonas';
calcAge(1991);
*/
/*
//Variables
console.log(me);
//console.log(job);
//console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

//Functions
console.log(addDecl(2, 3));
//console.log(addExpr(3, 4));
console.log(addArrow)
//console.log(addArrow(5, 5));

function addDecl(a, b){
    return a + b;
}

const addExpr = function(a, b){
    return a + b;
}

var addArrow = (a, b) => a + b;

//Example

if(!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart(){
    console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

*/
/*
console.log(this);

const calcAge = function(birthYear){
    console.log(2037 - birthYear);
    console.log(this);
}
calcAge(1991);

const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this);
}
calcAgeArrow(1980);

const jonas = {
    year: 1991,
    calcAge: function() {
         console.log(this);
        console.log(2037 - this.year);
    }
}
jonas.calcAge();

const matilda = {
    year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();

 */
/*
var firstName = 'Matilda';

const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function() {
       //console.log(this);
        console.log(2037 - this.year);

        //Solution 1
        const self = this;
        const isMillenial = function() {
             console.log(self);
            console.log(self.year >= 1981 && self.year <= 1996);
            //console.log(this.year >= 1981 && this.year <= 1996);
        };

        //Solution 2
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillenial();
    },
    greet: () => console.log(`Hey ${this.firstName}`),
};

jonas.greet();
jonas.calcAge();

const addExpr = function(a, b) {
    console.log(arguments);
    return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
}
addArrow(2, 5, 8);
*/

const jessica1 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

function marryPerson(originalPerson, newLastName){
    originalPerson.lastName = newLastName;
    return originalPerson;
}

const marriedJessica = marryPerson(jessica1, 'Davis');

//const marriedJessica = jessica;
//marriedJessica.lastName = 'Davis';

console.log('Before: ', jessica1);
console.log('After: ', marriedJessica);

const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob'],
};

//Shallow copy
const jessicaCopy = { ...jessica };
jessicaCopy.lastName = 'Davis';

console.log(jessica, jessicaCopy);

// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');
//
// console.log('Before: ', jessica);
// console.log('After: ', jessicaCopy);

//Deep copy/clone
const jessicaClone = structuredClone(jessica);
jessicaClone.family.push('Mary');
jessicaClone.family.push('John');

console.log('Original: ', jessica);
console.log('Clone: ', jessicaClone);