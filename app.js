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

let numbers = [1, 2, 3, 4];

/*numbers.forEach(function (number, index, array) {
  array[index] = number * 2;
});
console.log(numbers);*/

let users = [
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