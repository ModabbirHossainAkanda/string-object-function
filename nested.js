const college = {
    name: 'vnc',
    class: ['10', '11', '12'],
    events: ['science fair', 'bijoy dibos', 'rag day', '21 february', '14 february'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }

}
// console.log(college);
// console.log(college.unique);college and unique 2 tai object so amr drkar color ta thats why ami jeta korbo seta hoilo
// console.log(college.unique.color);
college.unique.result.merit = 'top top top'
console.log(college.unique.result.merit);