
var finalPrices = function(prices) {
    
    let res=[];

    for(let i=0; i<prices.length; i++){

        let discount=0;

        for(let j=i+1; j<prices.length; j++){

            if(prices[i]>=prices[j]){
                
                discount= prices[j];
                break;
            }
        }   
        res.push(prices[i] - discount);     
    }

    return res;
};
console.log(finalPrices([8,4,6,2,3])); //[4,2,4,2,3]
console.log(finalPrices([1,2,3,4,5])); //[1,2,3,4,5]
console.log(finalPrices([10,1,1,6])); //[9,0,1,6]