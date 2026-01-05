/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    
    while(stones.length > 1){

        stones.sort((a,b)=> b-a);//descending order and sort each time to get heaviest 
        
        let stone1= stones[0];//heaviest stone after sorting 
        let stone2= stones[1];//2nd heiviest

        stones.splice(0,2);//remove elements of index 0,1

        if(stone1>stone2){

            stones.push(stone1-stone2)
        }
        //if equal do not push in stones mean destroyed
    }

    if(stones.length==1) return stones[0]
    else return 0;
    //OR return stones.length ? stones[0] : 0;
};
console.log(lastStoneWeight([2,7,4,1,8,1])); //1
console.log(lastStoneWeight([1])); //1  