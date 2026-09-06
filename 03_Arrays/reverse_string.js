function reverseString(s) {

    if(typeof s === "string"){//if the string was array of char then no need to split
        s = s.split("");
    }

    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        // Swap characters
        [s[left],s[right]]=[s[right],s[left]];
        left++;
        right--;
    }
    s.join("");//we made the changes in place so no need to join back if we want array of char
    return s;
}
console.log(reverseString("hello")); //["o","l","l","e","h"]
console.log(reverseString(["H","a","n","n","a","h"])); //["r","a","t","n","j","H"]