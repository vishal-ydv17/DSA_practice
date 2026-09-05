<<<<<<< HEAD
// //BRUTE FORCE APPROACH
// var maxProfit = function(prices) {

//     let maxProfit= 0

//     for(let i=0; i<prices.length; i++){
//         for(let j=i+1; j<prices.length-1; j++){
            
//             let profit= prices[j]-prices[i];

//             if(profit>maxProfit) maxProfit=profit;
//         }
//     }
//     return maxProfit;
// };
var maxProfit = function(prices) {

    let minPrice = prices[0];
    let maxProfit = 0;

    for(let i=0; i<prices.length; i++){

        let profit= prices[i]-minPrice;
        if(profit>maxProfit) maxProfit=profit;
        if(prices[i]<minPrice) minPrice=prices[i]
    }
    return maxProfit;
=======
// //BRUTE FORCE APPROACH
// var maxProfit = function(prices) {

//     let maxProfit= 0

//     for(let i=0; i<prices.length; i++){
//         for(let j=i+1; j<prices.length-1; j++){
            
//             let profit= prices[j]-prices[i];

//             if(profit>maxProfit) maxProfit=profit;
//         }
//     }
//     return maxProfit;
// };
var maxProfit = function(prices) {

    let minPrice = prices[0];
    let maxProfit = 0;

    for(let i=0; i<prices.length; i++){

        let profit= prices[i]-minPrice;
        if(profit>maxProfit) maxProfit=profit;
        if(prices[i]<minPrice) minPrice=prices[i]
    }
    return maxProfit;
>>>>>>> aed3457f1c2fda034e6693f08bdeb481ed2f0bcc
};