const student = {
    name: 'Mahin Hasan',
    id: 121,
    address: 'Sylhet, Bangladesh',
    isSingle: true,
    friends: ['Mahdy', 'Mehat', 'Adia'],
    // An object inside an Array
    movies: [{ name: 'kgf', year: 2018 }, { name: 'jawan', year: 2023 }],
    // function inside an Object
    act: function(){
        console.log('Actor is Acting');
    },
    // An object inside object
    car: {
        brand: 'Toyota',
        price: 170000,
        made: 2003,
        manufacturer: {
            ceo: 'Toyoda',
            country: 'Japan'
        }
    }
}
console.log(student);
student.act();