'use strict';

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

