function cubeNumber(number) {
    if (typeof number !== 'number') { 
        return console.log('Input must be a number');
    }
    let result = Math.pow(number, 3);
    return result;
}


function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return 'Input must be a string';
    }
    if (string1.includes(string2)) {
        return true;
    }
    else {
        return false;
    }
}


function sortMaker(arr) {
    if (arr[0] <= 0 || arr[1] <= 0) {
        return 'Invalid Input';
    }
    if (arr[0] === arr[1]) {
        return 'equal';
    }
    if (arr[0] < arr[1]) {
        [arr[0], arr[1]] = [arr[1], arr[0]];
        return arr;
    }
    return arr;
}


function findAddress(obj) {

    let store = ['_', '_', '_'];
    if (obj.street === undefined) {
        store[0] = ('__');
    }
    else {
        store[0] = (obj.street);
    }
    if (obj.house === undefined) {
        store[1] = ('__');
    }
    else {
        store[1] = (obj.house);
    }
    if (obj.society === undefined) {
        store[2] = ('__');
    }
    else {
        store[2] = (obj.society);
    }
    const output = store.join(',')
    return output;
}



function canPay(changeArray, totalDue) {
    if (!Array.isArray(changeArray)) {
        return 'Not an Array';
    }
    const arrSum = changeArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    if (arrSum > totalDue) {
        return true;
    }
    else {
        return false;
    }

}
