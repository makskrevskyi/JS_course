let person = {
    name: 'Max',
    surname: 'Krevskyi',
    email: 'maks.krevskyi@gmail.com',
    continent: 'Europe',
    country: 'Ukraine',
    city: 'Lviv',
    nationality: 'Ukrainian',
    nativeLanguage: 'Ukrainian',
    age: 15,
    gender: 'male',
    skin: 'white',
    hair: 'black',
    school: 'Liceum "Hrono" (school No 64)',
    class: 10,

}


console.log (person);

console.log("");


function personCopy() {
    let ObjectCopy = {};
    let key;
    for (key in person) {
        ObjectCopy[key] = person[key];
    }
    return ObjectCopy;
}

let person2 = personCopy();
console.log(person2)