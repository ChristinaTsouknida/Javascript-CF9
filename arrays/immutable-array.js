const arr = [10, 2, 9, 6, 5];

//Immutable add

function addToArrayEnd(array, item) {
    return [...array, item];
}

function addToArrayStart(array, item) {
    return [item, ...array];
}

function addToArrayIndex(array, index, item) {
    return[...array.slice(0, index), item, ...array.slice(index)]; 
}


//update immutable

const updateArray = (arr, newValue) => arr.map(item => newValue);

const updateArrayByIndex = (arr, index, newValue) => arr.map((value, i) => 
    i === index ? newValue : value); 


//immutable delete
const deleteByIndex = (arr, item) => arr.filter(value => value !== item);