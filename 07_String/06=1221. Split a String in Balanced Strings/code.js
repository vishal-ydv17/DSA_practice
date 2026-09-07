/**
 * @param {string} s
 * @return {number}
 */
// // //sol-1(Brute force)
// //LOGIC-if we find R then we increase the th Rcount and if we find L then we increase the
// //Lcount now if both are same then we found 1 balanced string so increase ansCount
// var balancedStringSplit = function(s) {
    
//     let ansCount=0;

//     let countR=0;
//     let countL=0;
//     for(let i=0; i<s.length; i++){

//         if(s[i]=='R') countR++;
//         if(s[i]=='L') countL++;
        
//         if(countR===countL){
//             ansCount++;
//             countR=0;
//             countL=0;
//         }
//     }
//     return ansCount;
// };


//sol-2(optimize above sol by not using 2 extra variable like countR and countR)
//LOGIC-now in this we keep a 1 variable only to increase a count when we find R and 
//decrease a count when we find L and if they balanced mean eqal to 0 there 
//we found a 1 balanced string so increase ansCount
var balancedStringSplit = function(s) {
    let ansCount=0;
    let balanceCount=0;
    for(let i=0;i<s.length;i++){
        
        if(s[i]==='R') balanceCount++;
        if(s[i]==='L') balanceCount--;

        if(balanceCount===0){
            ansCount++;
        }
    }
    return ansCount;
}