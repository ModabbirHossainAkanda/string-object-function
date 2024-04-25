const school = 'RAJ UK Uttara Model High School';
console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());
/**
 * uppercase: A B C D E F G
 * lowercase: a b c d e f g
 * uppercase lowercase problem solved
 */

// const subject = 'Chemistry';
// const book = 'chemistry';
// if(subject.toLowerCase() === book.toLowerCase()){
//     console.log('I am reading book aibar porikkhai fatai felmu');
// }
// else{
//     console.log('iccha moto pristha ultamu poira kaaj nai');
// }

// const gach = 'lebugach';
// const pata = 'LebugaCH';
// if(gach.toUpperCase() === pata.toUpperCase()){
//     console.log('ami aam khabo na jodi valo moto aam na pake');
// }
// else{
//     console.log('pata khaoa jai na aam e khete hobe amr');
// }

/**
 * trim er kaaj hoilo : jodi kono ekta string likhte giye samne or piche space chole ashe tobe seta ke solve korar jnno trim use kora hoi
 * trim type problem solved
 */

const pepsi = ' drinks';
const coca_cola = 'drinks ';
if(pepsi.trim() === coca_cola.trim()){
    console.log('ami thaanda khaite pochondo kori , amake basy kore thaanda kine dao');
}
else{
    console.log('amr thaanda valo lage na ');
}