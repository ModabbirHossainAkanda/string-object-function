/**
 * how we find keys and values of object....
 * 
 */
const computer = {
    brand: 'lenovo',
    price: 40000,
    processor: 'intel',
    hdd: '512gb',
    monitor: 'hp',
    screen: 'high',
    mouse: 1000
}
// const keys = Object.keys(computer);
// console.log(keys);

// const values = Object.values(computer);
// console.log(values);
computer.price = 60000;
console.log(computer);