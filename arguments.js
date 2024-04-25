function doubleIt (number){
    const doubled = number * 2;
    console.log(number, doubled);
}
console.log('I will call the function');
doubleIt(15);
console.log('.....');
doubleIt(88);
console.log(',,,,,....');
doubleIt(30);

function difference(num1, num2){
    const diff = num1 - num2;
    console.log(num1, num2, 'difference is', diff);
}
const fatherAge = 50;
const myAge = 18;
difference(fatherAge, myAge);