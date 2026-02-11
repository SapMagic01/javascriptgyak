'use strict';

/*
const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 213123312,
}

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if(passenger.passport === 213123312) {
    alert('Check in')
    } else {
        alert('Wrong passport')
    }
}
*/
/*
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);


const newPassport = function(person){
    person.passport = Math.trunc(Math.random() * 100000);
}
newPassport(jonas);
checkIn(flight, jonas);
*/

const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

//Higher-order function
const transformer = function(str, fn){
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`)
    console.log(`Transformed by: ${fn.name}`);

}
transformer('JavaScript is the best', upperFirstWord);

transformer('JavaScript is the best', oneWord);

const high5 = function() {
    console.log('hi🖐️');
}
document.body.addEventListener('click', high5);

['jonas', 'martha', 'adam'].forEach(high5)