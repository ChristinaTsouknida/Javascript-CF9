const arr = [10, 2, 9, 6, 5];

function getMin(array) {
   let minVal = Math.min(...arr);
   let minPosition = arr.indexOf
   return { minVal, minPosition };
}

function getMinClassic(arr) {
   let minPosition = 0;
   let minVal = arr[minPosition];
   for (let i = 1; i < array.length; i++) {
      if (arr[i] < minVal) {
         minVal = arr[i];
         minPosition = i;
      }
   }
   return { minVal, minPosition };   
}
 
