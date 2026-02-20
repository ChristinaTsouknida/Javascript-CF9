const products = [];

function insert(arr, product) {
    try {
        if (!Array.isArray(arr)) {
            throw new TypeError("Expected an array");
        }

        if(typeof product !== "string") {
            throw new TypeError("product must be a string");
        }

        if (!product.trim()) {
            throw new Error("Product can not be empty");
        }

        if (arr.includes(product)) {
            throw new Error(`Product "${product}" already exists in the array`)
        }
        
        arr.push(product);

    } catch (error) {
        console.error(`Insert failed: ${error.message}`);
        throw error;
    }
}

insert(products, "Laptop");
insert(products, "Mouse");
insert(products, "Keyboard");
insert(products, "Laptop"); //throws error because laptop already exists
console.log(products);
