 //LOGIC- we can move 2 position with 0 cost means chips at even and odd position can be moved with 0 cost 
 //-to bring all chips together, we need to move either:
//->all even chips to an odd position (cost = number of even chips)
//OR
//->All odd chips to an even position (cost = number of odd chips)
var minCostToMoveChips = function(position) {
    
    let evenCount=0;
    let oddCount=0;

    for(let pos of position){

        if(pos % 2 == 0){//even no
            evenCount++;
        }
        else{//odd no
            oddCount++;
        }        
    }

    return Math.min(evenCount, oddCount);//choose the min cost to move
};
console.log(minCostToMoveChips([1,2,3])); //1
console.log(minCostToMoveChips([2,2,2,3,3])); //2
console.log(minCostToMoveChips([1,1000000000])); //1