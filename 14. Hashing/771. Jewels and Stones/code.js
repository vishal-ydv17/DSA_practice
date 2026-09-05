<<<<<<< HEAD
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    
    let count=0;

    for(let i=0; i<stones.length;i++){
        // for(let j=0; j<jewels.length;j++){

        //     if(stones[i]==jewels[j]){
        //         count++;
        //     }
        // }
        //OR
        if(jewels.includes(stones[i])){
            count++;
        }
    }
    return count;
}

//OR
//LOGIC- we can solve by using set as we store jewel in set then check if one elemnt present in stones
// var numJewelsInStones = function(jewels, stones) {
    
//     let mySet= new Set();
//     let count=0;
//     for(let num of jewels){
//         mySet.add(num);
//     }

//     for(let num of stones){
//         if(mySet.has(num)){
//             count++;
//         }
//     }
//     return count;
=======
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    
    let count=0;

    for(let i=0; i<stones.length;i++){
        // for(let j=0; j<jewels.length;j++){

        //     if(stones[i]==jewels[j]){
        //         count++;
        //     }
        // }
        //OR
        if(jewels.includes(stones[i])){
            count++;
        }
    }
    return count;
}

//OR
//LOGIC- we can solve by using set as we store jewel in set then check if one elemnt present in stones
// var numJewelsInStones = function(jewels, stones) {
    
//     let mySet= new Set();
//     let count=0;
//     for(let num of jewels){
//         mySet.add(num);
//     }

//     for(let num of stones){
//         if(mySet.has(num)){
//             count++;
//         }
//     }
//     return count;
>>>>>>> aed3457f1c2fda034e6693f08bdeb481ed2f0bcc
// };