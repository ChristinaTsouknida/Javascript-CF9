const arr = [10, 2, 9, 6, 5];

//sort in a new array

//slice, sort
let sortedArr = arr.slice().sort((a, b) => a - b);

//spreading, sort
sortedArr = [...arr].sort((a, b) => a - b);

//toSorted, sort
sortedArr = arr.toSorted((a, b) => a - b);