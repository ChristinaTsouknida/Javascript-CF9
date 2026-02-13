const arr = [];
const arr2 = [1, 2, 3, 4, 5];
const grid = [[1, 2], [3, 4], [5, 6]];

for (let i = 0; i < arr2.length; i++) {
   console.log(arr2[i]);
}

for (const num of arr2) {
   console.log(num)
}

for (let i = 0; i < grid.length; i++) {
   for (let j = 0; j < grid[i].length; j++) {
      console.log(grid[i][j]);
   }
}

for (const row of grid) {
   for (const value of row) {
      console.log(value);
   }
}

//forEach traverses the array
arr2.forEach(num => console.log(num));
arr2.forEach(console.log);