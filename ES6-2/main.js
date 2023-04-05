//const

// const firstAge = 6;
// firstAge = 8;

// const childAges = [5, 6, 8, 10];
// childAges = [5, 6, 8, 10, 12];
// childAges.push(12);
// console.log(childAges);

// const personObj = {name: 'Nabendu', skill: 'JS'};
// personObj.skill = 'React';
// personObj.profession = 'Developer';
// console.log(personObj)

//Default Parameters
// const isEqual = (num1, num2=10) => {
//     console.log(num1);
//     console.log(num2);
//     return num1 === num2;
// }

// console.log(isEqual(10, 20));
// console.log(isEqual(10));

//Object Literals Extensions
// let name = 'Nabendu';
// let age = 40;

// let obj = {
//     name,
//     age
// }

// console.log(obj)

//Dynamic Fields
// let ageField = 'age';

// let es6Obj = {
//     name: 'Shikha',
//     [ageField]: 40
// }

// console.log(es6Obj)

//Rest Operators
// let arrFunc = (...arr) => {
//     console.log(arr)
// }

// arrFunc(67, 12, 43, 12, 89, 67, 19);

// let restFunc = (a, b, c, ...n) => {
//     console.log(a, b, c, n);
// }

// restFunc(67, 12, 43, 12, 89, 67, 19);

//Spread Operator
// let a = [67, 12, 43, 12, 89, 67, 19];
// console.log(Math.min(67, 12, 43, 12, 89, 67, 19));
// console.log(Math.min(...a));
// console.log(Math.max(...a));

//Copy problem - Call by reference
// let x = [12, 43, 12, 89, 67];
// let y = x;
// y.push(11);
// console.log(x);
// console.log(y);

//Solution with spread - Call by value
// let c = [67, 12, 43, 12, 89];
// let d = [...c];
// d.push(13);
// console.log(c);
// console.log(d);

//Merging of Arrays
// let x1 = [67, 12], x2 = [43, 89], x3 = [91, 97];
// let d1 = [...x1, ...x2, ...x3];
// console.log(d1);

//Used in Objects
// let obj1 = { foo: 'bar', x: 42 }, obj2 = { foo: 'baz', y: 13 };
// let clonedObj = { ...obj1 };
// console.log(clonedObj);

// let mergedObj = {...obj1, ...obj2};
// console.log(mergedObj);

//Array Destructuring
// const rgb = [255, 200, 20];
// const r = rgb[0];
// const g = rgb[1];
// const b = rgb[2];

// const [r, g, b] = rgb;
// console.log(r, g, b);

//Object destructuring
// const developer = {
//     firstname: 'Nabendu',
//     lastname: 'Biswas',
//     country: 'India'
// };

// const firstname = developer.firstname;
// const lastname = developer.lastname;
// const country = developer.country;

// const { firstname, lastname, country } = developer;
// console.log(firstname, lastname, country);


//ES6 classes
// class CreateRoom {
//     constructor(name){
//         this.room = `${name}'s room`
//     }

//     cleanRoom(soap){
//         console.log(`Cleaning ${this.room} with ${soap}`);
//     }
// }

// const nabsRoom = new CreateRoom('Nabendu');
// const shikhaRoom = new CreateRoom('Shikha');

// nabsRoom.cleanRoom('Domex');
// shikhaRoom.cleanRoom('Lizol');

//Classical for loop
// let langs = ['Cobol', 'Java', 'JavaScript']
// for(let i=0; i<langs.length; i++){
//     console.log(langs[i]);
// }

//forEach
// langs.forEach(lang => console.log(lang));

//Map use case
// let numbers = [6, 8, 10];

// let doubledNums = [];
// for(let i=0; i<numbers.length; i++){
//     doubledNums.push(numbers[i] * 2);
// }

// console.log(doubledNums)

//map
// let doubled = numbers.map(num => num * 2);
// console.log(doubled);

//filter use case
// let products = [
//     { name: 'Samsung M21', category: 'smartphone'},
//     { name: 'Samsung M31', category: 'smartphone'},
//     { name: 'Macbook Air', category: 'laptop'},
//     { name: 'Asus Zenbook', category: 'laptop'}
// ];

// let filtered = [];
// for(let i=0; i<products.length; i++){
//     if(products[i].category === 'smartphone'){
//         filtered.push(products[i])
//     }
// }

// console.log(filtered);

//filter
// let filteredES6 = products.filter(item => item.category === 'laptop');
// console.log(filteredES6);

//some and every
// let devices = [
//     { name: 'Samsung M21', category: 'smartphone', ram: 4},
//     { name: 'Samsung M31', category: 'smartphone', ram: 6},
//     { name: 'Macbook Air', category: 'laptop', ram: 8},
//     { name: 'Asus Zenbook', category: 'laptop', ram: 16}
// ];

//every
// const allDevicesCanCode = devices.every(device => device.ram >= 6);
// console.log(allDevicesCanCode);

//some
// const someDevicesCanCode = devices.some(device => device.ram >= 6);
// console.log(someDevicesCanCode);

//Classic use case of reduce
let numbers = [20, 30, 40];

// var sum = 0;
// for(let i=0; i<numbers.length; i++){
//     sum += numbers[i];
// }

// console.log(sum);

const sumReduce = numbers.reduce((acc, curr) => {
    return acc + curr
}, 0);
//0 + 20 = 20
//20 + 30 = 50
//50 + 40 = 90

console.log(sumReduce)
