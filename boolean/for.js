let i = 1;
let sum = 0;

for (let i = 1; i <= 5; i++) {
   sum += 1;
   i++;
}

console.log("Sum:", sum)

let numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
   sum += num;
}

console.log("Sum with enhanced for:", sum)