
var kidsWithCandies = function(candies, extraCandies) {
    
    let res=[];
    let maxCandy= Math.max(...candies);//we can use for loop to find max val also

    for(let candy of candies){

        if(candy + extraCandies >= maxCandy){
            
            res.push(true);
        }
        else{
            res.push(false);
        }
    }

    return res;
};
console.log(kidsWithCandies([2,3,5,1,3], 3)); //[true,true,true,false,true]
console.log(kidsWithCandies([4,2,1,1,2], 1)); //[true,false,false,false,false]
console.log(kidsWithCandies([12,1,12], 10)); //[true,false,true]