//foreach
/*
array.foreach(function(currentValue, index, array) {
codes
})
*/
let persons = ["ali", "reza", "amir", "arash"];

/*persons.forEach(function (person, index) {
  console.log(`Hello ${person} ${index}`);
});*/

//let numbers = [1, 2, 3, 4];

/*numbers.forEach(function (number, index, array) {
  array[index] = number * 2;
});
console.log(numbers);*/

/*let users = [
    { id: 1, name: "sara", email: "sara@gmail.com" },
    { id: 2, name: "tina", email: "tina@gmail.com" },
    { id: 3, name: "mary", email: "mary@gmail.com" },
    { id: 4, name: "mina", email: "mina@gmail.com" }
];

users.forEach(function(user) {
    //sendWellcome(user.email)
    console.log(`we send wellcome email to ${user.email}`)
})

function sendWellcome(email) {
    //console.log(`we send wellcome email to ${email}`)
}

//map
/*
let newArray = array.map(function(currentValue, index, array) {
   return newValue
})
   */

//let numbers = [1, 2, 3, 4];

/*let doubleNumber = numbers.map(function (number) {
  return number * 2;
});
//console.log('doubleNumber', doubleNumber)
//console.log('numbers', numbers)

let users = [
  { id: 1, name: "sara", email: "sara@gmail.com" },
  { id: 2, name: "tina", email: "tina@gmail.com" },
  { id: 3, name: "mary", email: "mary@gmail.com" },
  { id: 4, name: "mina", email: "mina@gmail.com" },
];

let userNames = users.map(function (user) {
  return user.name;
});
//console.log(userNames)

let stringNumbers = numbers.map(function (num) {
  return num.toString();
});
//console.log(stringNumbers)
//console.log(numbers)

//filter
/*
let newArray = Array.filter(function(currentValue,index,array) {
    return condition
})
*/

//let numbers = [10, 1, 8, 2, 9, 14];
/*let resultNumber = numbers.filter(function (number) {
  return number > 5;
});
//console.log(resultNumber)
//console.log(numbers)

let evenNumber = numbers.filter(function (number) {
  return number % 2 === 0;
});
//console.log(evenNumber)
//console.log(numbers)

let products = [
  { name: "laptop", price: 1000 },
  { name: "phone", price: 400 },
  { name: "tablet", price: 300 },
];
let resultProduct = products.filter(function (product) {
  return product.price > 350;
});
//console.log(resultProduct)

let names = ["tom", "jack", "jonas", "jorg"];

let resultName = names.filter(function (name) {
  return name.length > 3;
});
//console.log(resultName)


let mixedArray = [1, "hello", undefined, 3, "world", null];

let numberOnly = mixedArray.filter(function (item) {
    return typeof item === 'number'
});
//console.log(numberOnly)

let users = [
  { id: 1, name: "sara", email: "sara@gmail.com", active: true },
  { id: 2, name: "tina", email: "tina@gmail.com", active: false },
  { id: 3, name: "mary", email: "mary@gmail.com", active: true },
  { id: 4, name: "mina", email: "mina@gmail.com", active: false }
];
let activeUsers = users.filter(function(user){
    return user.active === true   
    //     user.active
})
//console.log(activeUsers)

//find

/*
let result = Array.filter(function(currentValue,index,array) {
    return condition
})
*/
/*let numbers = [1, 4, 2, 10, 9, 14];

let result = numbers.find(function(number) {
    return number > 5
})
console.log(result)
*/

//reduce
/*
let result = Array.reduce(function(accumulator,currentValue,currentIndex,array) {
    return
,initial value)
*/

const numbers = [2, 3, 1, 4];

let result = numbers.reduce((accu,number) => {
  return number + accu
},0)
//console.log(result)



let multiple = numbers.reduce((accu,number)=>{
   return accu * number
},1)
console.log(multiple)


let products = [
  { name: "laptop", price: 1000, quentity:2},
  { name: "phone", price: 400,   quentity:3},
  { name: "tablet", price: 300,  quentity:4}
];
/*
let totalPrice = products.reduce((accu,product)=> {
   return accu += product.price
}, 0)
console.log(totalPrice)
*/
let totalPrice = products.reduce((accu,product)=> {
   return accu += (product.quentity * product.price)
}, 0)
console.log(totalPrice)