const mobile = {
    brand: 'samsung',
    price: 25000,
    color: 'black',
    camera: '12mp'
}
const keys = Object.keys(mobile);
console.log(keys);
const values = Object.values(mobile);
console.log(values);
for(const prop in mobile){
    console.log(prop)
}