const js0bj = {
    id: 1,
    title: "Athens",
    population: 3000000
}


//convert to JSON String
const jsonString = JSON.stringify(js0bj);
console.log(jsonString);  //{"id":1, "title":"Athens", "population":3000000}


//convert back to Javascript Object
const js0bj2 = JSON.parse(jsonString);
console.log(js0bj2); //{id: 1, title: "Athens", population: 3000000}