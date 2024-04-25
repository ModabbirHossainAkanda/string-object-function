function add(price1, price2){
    const total = price1 + price2;
    return total;
}
const bill = add(10, 20);
// console.log('give my bill list :', bill);

function add2 (price1, price2){
    return price1 + price2;
}
const bill2 = add2(10, 90);
console.log(bill, bill2);


function doMath(math1, math2){
    const sum = math1 + math2;
    const diff = math1 - math2;
    const multiply = sum * diff;
    const result = multiply / 3;
    return result;
}
const total = doMath(60, 30);
console.log('get the numbers:', total);