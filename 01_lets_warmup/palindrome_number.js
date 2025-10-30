// 01-Technique (brute force)
function checkPalindromeNumber(num) {

    if(num<0) return false;

    let reversedNumber = 0;
    let originalNumber = num;

    while(num>0){
        let digit = num % 10;
        reversedNumber = reversedNumber * 10 + digit;
        num = Math.floor(num / 10);
    }
    return reversedNumber===originalNumber; //this give true/false

}

console.log(checkPalindromeNumber(121),"from technique 01"); // true
// console.log(checkPalindromeNumber(-121)); // false


// 02- technique (better approach)

function checkPalindromeNumber2(num) { 
    if(num<0) return false;
    const strNum = num.toString();
    const reversedNumber= strNum.split('').reverse('').join(''); // split into array, reverse the array, join back to string
    return strNum === reversedNumber;
}

console.log(checkPalindromeNumber2(121),"from technique 02"); // true


// 03- technique (optimal approach)(i have used two pointer technique here)

function checkPalindromeNumber3(num) {
    if(num<0) return false;
    const strNum = num.toString();// convert number to string(and string behaves like an array)

    let left = 0;
    let right = strNum.length - 1;
    while(left < right) {
        if(strNum[left] !== strNum[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log(checkPalindromeNumber3(121),"from technique 03"); // "121"