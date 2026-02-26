const obj = {
    id: 1,
    firstname: "Anna"
}

//Mutable add
obj.lastname = "Smith";   //adds new property

//Immutable add
const addToObj = (obj, field, value) => ({ ...obj, [field]: value});

const obj2 = addToObj(obj, "lastname", "Smith");
console.log(obj2);

//Immutable update

const uptadeObj = (obj, field, value) => ({...obj, [field]: value});
const obj3 = uptadeObj(obj2, "firstname", "Maria");
console.log(obj3);

//Immutable delete

const deleteFromObj = (obj, field) => {
    const { [field]: _, ...objToReturn } = obj;
    return objToReturn;
}


