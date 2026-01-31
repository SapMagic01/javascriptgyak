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

