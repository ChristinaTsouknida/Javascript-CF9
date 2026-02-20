const users = [
    {id: 1, firstname: "Alice"},
    {id: 2, firstname: "Bob"},
    {id: 3, firstname: "Charlie"}
]

//traverse with forEach
 users.forEach(user => {
    console.log(user.firstname);
 })
// αφού είναι μία εντολή μπορεί να γραφτεί σε μία γραμμή
//  users.forEach(user => console.log(user.firstname));


//map
const usersWithEmails = [
    {id: 1, firstname: "Alice", email: "alice@aueb.gr"},
    {id: 2, firstname: "Bob", email: "bob@gmail.com"},
    {id: 3, firstname: "Charlie", email: "charlie@gmail.com"}
]

// usersWithEmails.map(user => {
//     return user.email;
// })

const emails = usersWithEmails.map(user => user.email)       // [alice@aueb.gr, bob@gmail.com, charlie@gmail.com]
console.log(emails);


//filter
const activeUsers = [
    {id: 1, firstname: "Alice", isActive: true},
    {id: 2, firstname: "Bob", isActive: false},
    {id: 3, firstname: "Charlie", isActive: true}
]

const usersWithStatusTrue = activeUsers.filter(user => user.isActive);
console.log(usersWithStatusTrue);

//reduce

const cart = [
    {id: 1, name: "Laptop", price: 1000},
    {id: 2, name: "Mouse", price: 50},
    {id: 3, name: "Keyboard", price: 80}
]

const totalPrice = cart.reduce((total, item) => total + item.price, 0);
console.log(totalPrice);

//some

const hasExpensiveItem = cart.some(item => item.price > 500);
console.log(hasExpensiveItem); //true

//every

const allItemsAffordable = cart.every(item => item.price < 1500);
console.log(allItemsAffordable); //true

//flatmap
const posts = [
    {id: 1, title: "Post 1", tags: ["javascript", "programming"]},
    {id: 2, title: "Post 2", tags: ["css", "html"]},
    {id: 3, title: "Post 3", tags: ["react", "vue"]}
]

const allTags = posts.flatMap(post => post.tags);
console.log(allTags);


// findIndex 
const userIndex = users.findIndex(user => user.firstname === "Bob")
console.log(userIndex);