const numbers = [45, 68, 12, 36, 98];

// traditional way
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}
// using for of
for (const number of numbers) {
    console.log(number);
}

const products = [
    { id: 1, name: 'xiaomi phone', price: 14500 },
    { id: 2, name: 'apple laptop', price: 75900 },
    { id: 3, name: 'samsung phone', price: 45800 },
    { id: 4, name: 'asus laptop', price: 65000 },
    { id: 5, name: 'oneplus Phone', price: 31000 }
];

function matchedProducts(products, search) {
    const matched = [];
    for (const product of products) {
        // console.log(product);
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched;
}
const result = matchedProducts(products, 'laptop');
console.log(result);


