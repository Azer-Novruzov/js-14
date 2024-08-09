//                                  EN SADE


// let number = prompt("5 ədəd elementi aralarında boşluq qoyaraq daxil edin:");
// let num = number.split(' ').map(Number);
// let minNum = Math.min(...num);
// console.log(minNum);




//                                  METOD 2
// function number(input) {
//     let numbers = input.split(' ');
//     if (numbers.length !== 5 || numbers.some(isNaN)) {
//     return false;
//     }
//     return numbers.map(Number);
// }
// function num() {
//     let input = prompt("5 ədəd elementi aralarında boşluq qoyaraq daxil edin:");
//     let numbers = number(input);
//     if (!numbers) {
//         console.log("Düzgün daxil edilmədi. Zəhmət olmasa, 5 ədəd rəqəmi aralarında boşluq qoyaraq daxil edin.");
//     return;
// }
//     let minNumber = Math.min(...numbers);
//     console.log("Ən kiçik ədəd:", minNumber);
// }num();




//                                     METOD 3
// function validateInput(input) {
//     let numbers = input.split(' ');
//     if (numbers.length !== 5) {
//         return false;
//     }
//     for (let i = 0; i < numbers.length; i++) {
//         if (isNaN(numbers[i]) || numbers[i] === '') {
//             return false;
//         }
//     }
//     for (let i = 0; i < numbers.length; i++) {
//         numbers[i] = Number(numbers[i]);
//     }
//     return numbers;
// }
// function findMinNumber() {
//     let input = prompt("5 ədəd elementi aralarında boşluq qoyaraq daxil edin:");
//     let numbers = validateInput(input);
//     if (!numbers) {
//         console.log("Düzgün daxil edilmədi. Zəhmət olmasa, 5 ədəd rəqəmi aralarında boşluq qoyaraq daxil edin.");
//         return;
//     }
//     let minNumber = numbers[0];
//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] < minNumber) {
//             minNumber = numbers[i];
//         }
//     }
//     console.log("Ən kiçik ədəd:", minNumber);
// }
// findMinNumber();





//                                          METOD 4
// function findMinNumber() {
//     let input = prompt("5 ədəd elementi aralarında boşluq qoyaraq daxil edin:");
//     let numbers = input.split(' ');
//     if (numbers.length !== 5) {
//         console.log("Düzgün daxil edilmədi. Zəhmət olmasa, 5 ədəd rəqəmi aralarında boşluq qoyaraq daxil edin.");
//         return;
//     }
//     let num1 = Number(numbers[0]);
//     let num2 = Number(numbers[1]);
//     let num3 = Number(numbers[2]);
//     let num4 = Number(numbers[3]);
//     let num5 = Number(numbers[4]);
//     if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5)) {
//         console.log("Düzgün daxil edilmədi. Zəhmət olmasa, yalnız rəqəmləri daxil edin.");
//         return;
//     }
//     let minNumber = num1;
//     if (num2 < minNumber) minNumber = num2;
//     if (num3 < minNumber) minNumber = num3;
//     if (num4 < minNumber) minNumber = num4;
//     if (num5 < minNumber) minNumber = num5;
//     console.log("Ən kiçik ədəd:", minNumber);
// }
// findMinNumber();





//                                      METOD 5
let input = prompt("5 ədəd elementi aralarında boşluq qoyaraq daxil edin:");
let numbers = input.split(' ');
if (numbers.length !== 5) {
    console.log("Düzgün daxil edilmədi. Zəhmət olmasa, 5 ədəd rəqəmi aralarında boşluq qoyaraq daxil edin.");
} else {
    let num1 = Number(numbers[0]);
    let num2 = Number(numbers[1]);
    let num3 = Number(numbers[2]);
    let num4 = Number(numbers[3]);
    let num5 = Number(numbers[4]);
    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5)) {
        console.log("Düzgün daxil edilmədi. Zəhmət olmasa, yalnız rəqəmləri daxil edin.");
    } else {
        let minNumber = num1;
        if (num2 < minNumber) minNumber = num2;
        if (num3 < minNumber) minNumber = num3;
        if (num4 < minNumber) minNumber = num4;
        if (num5 < minNumber) minNumber = num5;
        console.log("Ən kiçik ədəd:", minNumber);
    }
}