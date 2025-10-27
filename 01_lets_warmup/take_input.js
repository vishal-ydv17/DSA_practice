function add(a, b) {
    return a + b;
}

let x = prompt("Enter a number:");      // returns a string
let y = prompt("Enter another number:"); 

x = Number(x);   // convert to number
y = Number(y);

let result = add(x, y);
console.log("Sum:", result);
