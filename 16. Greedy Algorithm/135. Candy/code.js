/**
 * @param {number[]} ratings
 * @return {number}
 */
//sol-1(two pass)
//LOGIC-we need to give chilfren candies based on the left and right childen rating
//step-1.0 we will iterate from left to right and give candies based on right neighbour
//step-1.1 so initially we give 1 candies to all children which satisfy the requirement given in Q
//step-1.2 then we go left to right and give more candies based on right neighbour only
//step-2 similarly we go from right to left and give candies based on left neighbour
// and repeat step 1.0 and 1.1 but based on left neighbour
//step-3 finally we merge both(mean based on left and right neighbour) we give candies so for
//this we give candies max of both(left, right candies previously given) and find the total sum candies
var candy = function(ratings) {
    
    let n= ratings.length;
    //left to right
    let ltr= Array(n).fill(1);//give 1 candies to all which satisfy 1st requirement
    for(let i=1; i<ltr.length; i++){
        if(ratings[i-1] < ratings[i]){
            ltr[i] = ltr[i-1] + 1;//give 1 candy based on previous neighbour
        }
    }
    //right to left
    let rtl= Array(n).fill(1);
    for(let i=n-2; i>=0; i--){
        if(ratings[i+1] < ratings[i]){
            rtl[i] = rtl[i+1] + 1;
        }
    }
    //now give candies based on both left, right neighbour and find total candies
    let sumCandy=0;
    for(let i=0; i<n; i++){
        sumCandy = sumCandy + Math.max(ltr[i], rtl[i]);
    }
    return sumCandy;
};  

// //sol-2(one pass)
// //LOGIC-in this also 1st we give all the children to 1 candy means n=rating.length
// //step-1 when there is up trend or incresing order mean current rating is greater than previous 
// //then give 1 more candy as compared to previous
// //step-2 similarly when down trend or decreasing order means current rating is less than previous
// //then give 1 more candy as compared to previous
// //step-3 now at peaks mean from that point where down trend start we may have added twice 
// //so remove the lesser candy at peak and keep max cady at peak  
// var candy = function(ratings) {

//     let n= ratings.length;
//     let ans=n;//give 1 candy to all children
//     let i=1;
//     while(i<n){

//         if(ratings[i] === ratings[i-1]){
//             i++;
//             continue;
//         }
//         //give 1 candy more than previous rating when there is up trend
//         let up=0;
//         while(i<n && ratings[i] > ratings[i-1]){
//             up++;
//             ans = ans + up;
//             i++;
//         }
//         //similary when there is down trend give 1 more candy
//         let down=0;
//         while(i<n && ratings[i] < ratings[i-1]){
//             down++;
//             ans = ans + down;
//             i++;
//         }
//         //for the ith iteration there can be up or down trend so we may have added peak twice
//         //so remove the min candy give to peak and keep the max candy
//         ans = ans - Math.min(up,down);
//     }
//     return ans;
// }