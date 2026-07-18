const input = "mkdir    filename  ";
console.log(input.trim());
console.log(input.split(" "));

let words = input.split(" ").filter((word) => word !== '');;

console.log(words);