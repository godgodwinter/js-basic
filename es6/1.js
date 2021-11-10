// console.log('testing es6');

// es5
// var myName = "Belajar JS dasar";

// myName = "Belajar es5";

// console.log(myName);

// es6
// const myName = "Belajar es6";
// console.log(myName);

// es6 
// 1.let const 

let myName = `Belajar es6`;


myName = ` Belajar ES6 Dasar`;

console.log(myName);

const myCar = ['BMW', 'Toyota', 'Inova'];
for (let i = 0; i < myCar.length; i++) {
    console.log(myCar[i]);
}
// console.log(i);

// 2.concat
const user_place = document.getElementById('users');

const user_logged = "Paijo";

// user_place.innerHTML = user_logged;
console.log(user_logged);

user_place.innerHTML = `Hi ${user_logged} , Selamat datang kembali!`;