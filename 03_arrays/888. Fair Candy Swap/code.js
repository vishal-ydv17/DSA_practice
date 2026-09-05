var fairCandySwap = function(aliceSizes, bobSizes) {

    let sumA=0;//total alice candy
    let sumB=0;//total bob candy
    
    for(let candy of aliceSizes){
        sumA +=candy;
    }
    for(let candy of bobSizes){
        sumB +=candy;
    }

    for(let i=0; i<aliceSizes.length; i++){
        for(let j=0; j<bobSizes.length; j++){

            let x= aliceSizes[i];//alice will give some candy to bob
            let y= bobSizes[j];//bob will give some candy to alice

            // Check if after exchange sums are equal:
            // Alice new total = sumA - x + y
            // Bob new total = sumB - y + x
            if(sumA - x + y == sumB - y + x){
                return [x,y];
            } 
        }
    }
    return [];//this condition will never come as in question given it always has one sol
};
console.log(fairCandySwap([1,1],[2,2]));//[ 1, 2 ]
