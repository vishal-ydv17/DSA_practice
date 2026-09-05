<<<<<<< HEAD
/**
 * @param {string} s
 * @return {number[]}
 */
//LOGIC-track the last occurrence of every character in s then scan left to right continuously
//expanding partitionEnd to the last occurrence of each character seen now once the scan position
//i catches up to partitionEnd (meaning nothing seen so far extends the boundary further) thats a
//complete partition — record its length and start the next partition right after it
var partitionLabels = function(s) {
    
    let ans = [];

    let lastOccu = Array(26).fill(-1);  // will store the LAST index where each letter (a-z) appears in s

    //Step 1: scan through s once, and for every character keep updating its last-seen index
    //yy the end lastOccu[charIndex] = last position of that char in s
    for (let i = 0; i < s.length; i++) {
        let currCharIndex = s.charCodeAt(i) - 97;// convert char to index 0-25 (a=0, b=1, ...)
        lastOccu[currCharIndex] = i;
    }

    let partitionStart = 0;  
    let partitionEnd = 0;    

    //Step 2: scan through s again growing the current partition as needed
    for (let i = 0; i < s.length; i++) {
        let currCharIndex = s.charCodeAt(i) - 97;

        // this character might appear again later so we stretch partitionEnd to cover all 
        // its last occurrence so we dont close the partition too early so use max of both
        partitionEnd = Math.max(partitionEnd, lastOccu[currCharIndex]);

        // if our current position i== partitionEnd
        // it means every character in this partition is fully contained — safe to close it so push in ans
        if (i === partitionEnd) {
            ans.push(partitionEnd - partitionStart + 1);// /push/record this partitions size
            partitionStart = i + 1;  //next partition starts right after this one
        }
    }

    return ans;
=======
/**
 * @param {string} s
 * @return {number[]}
 */
//LOGIC-track the last occurrence of every character in s then scan left to right continuously
//expanding partitionEnd to the last occurrence of each character seen now once the scan position
//i catches up to partitionEnd (meaning nothing seen so far extends the boundary further) thats a
//complete partition — record its length and start the next partition right after it
var partitionLabels = function(s) {
    
    let ans = [];

    let lastOccu = Array(26).fill(-1);  // will store the LAST index where each letter (a-z) appears in s

    //Step 1: scan through s once, and for every character keep updating its last-seen index
    //yy the end lastOccu[charIndex] = last position of that char in s
    for (let i = 0; i < s.length; i++) {
        let currCharIndex = s.charCodeAt(i) - 97;// convert char to index 0-25 (a=0, b=1, ...)
        lastOccu[currCharIndex] = i;
    }

    let partitionStart = 0;  
    let partitionEnd = 0;    

    //Step 2: scan through s again growing the current partition as needed
    for (let i = 0; i < s.length; i++) {
        let currCharIndex = s.charCodeAt(i) - 97;

        // this character might appear again later so we stretch partitionEnd to cover all 
        // its last occurrence so we dont close the partition too early so use max of both
        partitionEnd = Math.max(partitionEnd, lastOccu[currCharIndex]);

        // if our current position i== partitionEnd
        // it means every character in this partition is fully contained — safe to close it so push in ans
        if (i === partitionEnd) {
            ans.push(partitionEnd - partitionStart + 1);// /push/record this partitions size
            partitionStart = i + 1;  //next partition starts right after this one
        }
    }

    return ans;
>>>>>>> aed3457f1c2fda034e6693f08bdeb481ed2f0bcc
};