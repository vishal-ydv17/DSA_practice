var reverse1 = function(x) {
    let sign= x<0 ? -1 : 1 ;

    let reversed= (parseInt(
        Math.abs(x).toString().split('').reverse().join(''))
    ) * sign;

    if(reversed > 2**31 - 1 || reversed < -(2**31)) return 0;

    return reversed;
};

console.log(reverse1(-123),"output from  reverse1"); // -321


var reverse2 = function(x) {
    let sign = x > 0 ? 1 : -1;
    x = Math.abs(x);
    let reversed_X = 0;

    while (x !== 0) {
        let digit = x % 10;
        reversed_X = reversed_X * 10 + digit;
        x = Math.trunc(x / 10);
    }

    reversed_X = reversed_X * sign;

    if (reversed_X > 2**31 - 1 || reversed_X < -(2**31)) return 0;

    return reversed_X;
};
console.log(reverse2(-43425),"output from  reverse2"); // -52434