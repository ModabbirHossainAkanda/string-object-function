function isEven(number){
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

// console.log(isEven(5));
// console.log(isEven(10));
// console.log(isEven(90));

function isOdd(number){
    if(number % 2 === 1){
        return true;
    }
    return false;
}
// console.log(isOdd(10));
// console.log(isOdd(9));

function numberOffElements(numbers){
    const len = numbers.length;
    return len;
}

numberOffElements([12, 13, 20, 90, 10, 19, 2, 5, 9]);