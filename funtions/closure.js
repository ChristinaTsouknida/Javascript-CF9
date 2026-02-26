function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}

const counter1 = createCounter();
console.log(counter1());  //1
console.log(counter1());  //2
console.log(counter1());  //3

class Counter {
    #count = 0; //private field
    increment() {
        this.#count++;
        return this.#count;
    }
}

const counter2 = new Counter();
console.log(counter2.increment()); //1
console.log(counter2.increment()); //2
console.log(counter2.increment()); //3