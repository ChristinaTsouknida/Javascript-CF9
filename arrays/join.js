const arr = [1, 2, 3, 4, 5];

const str = arr.join(" | ");

console.log(str);

arr.push(6, 7);
arr.push(8);

delete(arr[0]); //leaves an empty slot