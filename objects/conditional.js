const book = {
    author: {
        firstname: "Athanasios",
        lastname: "Androutsos"
    }
}

let lastname = book?.author?.lastname ?? "Unknown";

console.log(lastname);