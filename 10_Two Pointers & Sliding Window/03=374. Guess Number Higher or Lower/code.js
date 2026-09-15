/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
//LOGIC- in Q it is alredy given an API if we call guess(mid) it gives -1,1 or 0
//which tells how near guess number we are compared to mid
var guessNumber = function(n) {
    
    let l=0;//left
    let r=n;//right

    while(l<=r){
        let mid= Math.floor((l+r)/2);//floor it as it can be decimal

        if(guess(mid) === 0){//pick === mid(potential num) found it
            return mid;
        }
        else if(guess(mid) === -1){//pick < mid(potential num) our guess was too high search left half
            r = mid -1;
        }
        else{//pick > mid(potential num) our guess was too low, search right half
            l = mid +1;
        }
    }
    return -1;//this condition never executes as pick is always in [1, n]
};