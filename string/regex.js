let regex = /cat/i;
let str = "The Cat is on the roof";

if(regex.test(str)) {
   console.log("The string contains 'cat'")
} else {
   console.log("The string does not contain 'cat'")
}


let pattern2 = /cat/gi;
const str2= "I have a cat. The cat is cute";
const matches= str2.match(pattern2);

console.log();