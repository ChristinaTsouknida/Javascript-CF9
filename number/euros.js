const EXHANGE_RATE = 0.85;
let euros = 50;
let dollars = 0;
let roundedDollars = 0;


dollars = euros * EXHANGE_RATE;
roundedDollars = Math.round(dollars * 100) / 100;


console.log(euros + " Euros is equal to " + roundedDollars.toFixed(2))
console.log(euros + "Euros is equal to " + dollars.toFixed(2) + " Dollars")