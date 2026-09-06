// Technique 01: Using Two Pointers
var maxProfit = function(prices) {

    let minPrice = prices[0];
    let maxProfit = 0;

    for(let i=0; i<prices.length; i++){

        let profit= prices[i]-minPrice;
        if(profit>maxProfit) maxProfit=profit;
        if(prices[i]<minPrice) minPrice=prices[i]
    }
    return maxProfit;
};
console.log(maxProfit([7,1,5,3,6,4])); //5
console.log(maxProfit([7,6,4,3,1])); //0

// Technique 02: Brute Force

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


