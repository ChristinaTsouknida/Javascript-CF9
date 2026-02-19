const arr = [10, 2, 9, 2, 6, 5, 2];

const deleteBackwards = (arr, value) => {
// συγκρίνει στην while με i = 10 και στο if μπαίνει με i = 9
   let i = arr.length
   while(i--) {
      if (arr[i] === value) {
         arr.splice(i, 1)
      }
   }
} 


const deleteBackwards2 = (arr, value) => {
   for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === value) {
         arr.splice(i, 1)
      }
      
   }
} 

//new array
const deleteImmutable = (arr, value) => {
   return arr.filter(x => x !== value);
} 