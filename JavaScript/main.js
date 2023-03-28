//Variables
// var firstName = 'Nabendu';
// let age = 40;
// const isDeveloper = true;
// isDeveloper = false;
// console.log(firstName);
// console.log(age);
// console.log(isDeveloper);

// function varExp(){
//     if(true){
//         var num1 = 10;
//         console.log("Inside if var " + num1);
//     }
//     console.log("Outside if var " + num1);
// }

// varExp();
// console.log("Outside function var " + num1);

// if(true){
//     let num2 = 15;
//     console.log("Inside if let " + num2);
// }
// console.log("Outside if let " + num2);

//Datatypes - String, Numbers, Boolean, null, undefined, Symbol.
// const firstName = 'Nabendu';
// const age = 40;
// const rating = 6.7;
// const isDeveloper = true;
// const x = null;
// let z;

// console.log(typeof firstName);
// console.log(typeof age);
// console.log(typeof rating);
// console.log(typeof isDeveloper);
// console.log(typeof x);
// console.log(typeof z);

//old way
// console.log('My name is ' + firstName + ' and i am ' + age + ' year\'s old.');
//New way
// console.log(`My name is ${firstName} and i am ${age} year's old.`);

//String methods
// const str = 'Hello JavaScript the language of the web';

// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.substring(0, 7));
// console.log(str.includes('Java'));
// console.log(str.includes('Cobol'));
// console.log(str.split(' '));

//Array
const lang = ['Java', 'JavaScript', 'Cobol', 'C++', 'Golang', 'Kotlin', 5, true];
console.log(lang[2]);

lang.pop();
lang.pop();
console.log(lang);

lang.push('Pascal');
lang.unshift('Flutter');
console.log(lang);

lang.shift();
console.log(lang);

// console.log(Array.isArray(lang));
// console.log(Array.isArray('JavaScript'));
// console.log(lang.includes('Java'));
// console.log(lang.includes('Cobol'));

//Objects
const person = {
    firstName: 'Nabendu',
    'Last Name': 'Biswas',
    age: 40,
    isDeveloper: true,
    hobbies: ['coding', 'teaching', 'blogging'],
    address: {
        street: '20 main st',
        city: 'Bhopal',
        state: 'MP'
    }
}

console.log(person);
console.log(person.firstName);
console.log(person['Last Name']);
console.log(person.hobbies[1]);
console.log(person.address.city);


