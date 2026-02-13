const arr = [1, 2, 3, 4, 5];

//remove 2 elements starting from index 0
const removed = arr.splice(0, 2);

//insert element at index 2

arr.splice(2, 0, 99);

console.log(arr);

//update element at index 1
arr.splice(1, 1, 88);
console.log(arr);