const queue = [1, 2, 3, 4, 5];

queue.push(6); //adds 6 to the end of the queue
console.log(queue);


//removes the first element of the queue
const frontElement = queue.shift();
console.log("Dequeued element: ", frontElement);
console.log(queue);