/*important *** I used  "Live server" for see the result when I used alert/ *
// let Client = 4517;
// let DevFirstName = "Mana";
// let devFamilyName = "Ghabraei";
// let degree = "Master";
// let myAge = 27;
// let Goal = "Be a professional";
// let InMinutes = 54384;
// let isOnline = true;
// let firstNumber = 25;
// let secNumber = 26784;
// let remainder = 26784 % 25;
// let number = 12
// let str = "12"
// let number2 = 14
// console.log(number == number2);
// console.log(number == str);
// console.log(number === str);
// console.log(remainder);
// console.log(
//     "About creator" +
//     DevFirstName +
//     " " +
//     devFamilyName +
//     "\n" +
//     "She has:" +
//     degree +
//     " " +
//     ' in " physical-chemistry"'
// );
// console.log(typeof isOnline);
// console.log(Goal);
// console.log(Client);

// console.log(InMinutes);

// console.log(typeof myAge);
// console.log(firstNumber + secNumber);

// let students = ["Mana", "Saghar", "Leila", "Bita"];

// console.log(students);
// console.log(students.length);
// console.log(students[2]);

// let num1 = 30;
// let num2 = 6;
// let num3 = 5;
// if (num2 > num3) {
//     alert("yes");
// } 

if x was "true" do & if it was not true do else

let num1 = 30;
let num2 = 6;
let num3 = 5;
if (num2 < num3) {
    alert("Yes");

} else {
    alert("No");
}

/*syntax if:
if(){

}else{

}*/


// let num1 = 12
// let num2 = 4
// let num3 = 3
// if (num2 * num3 === 10) {
//     alert("multiply of them is equal 10");

// } else if (num2 * num3 === 11) {
//     alert("multiply of them is equal 11");
// } else if (num2 * num3 === 1) {
//     alert("multiply of them is equal 13");
// } else {
//     alert("all choices are false");
// }
// // Function:
function showValue() {
    let num1 = 2
    let num2 = 8
    let resultNumber = num1 + num2
    alert('Result: ' + resultNumber)
}
showValue()

let showValue = function() {
    let num1 = 2;
    let num2 = 8
    let resultNumber = num1 + num2
    alert("num1+num2 = " + resultNumber)
};

showValue()



function sumNumbers(num1, num2) {
    let result = num1 + num2
    return result
}
let sumResult = sumNumbers(2, 8)
console.log("Result =" + sumResult);


let number1 = prompt('Enter First Number ...')
let number2 = prompt('Enter Second Number...')

function showPower(num1, num2) {
    return num1 ** num2;
}
let powerResult = showPower(number1, number2)
alert('powerResult= ' + powerResult);

function sumValue(num1 = 1, num2 = 2) {
    // if (num1 == undefined) {

    //     num1 = 1
    // }
    // if (num2 == undefined) {
    //     num2 = 2
    // }
    let result = num1 + num2
    alert("Result= " + result)
}
sumValue()