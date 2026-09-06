//LOGIC- note only start and end value then push all values from start to end exaclty [start → end] so what happening is that, for n rounds end and start will be repeted if 1 cycle compled and new cycle is started so we push it answer from start to end.
//similary for start>end we go from  [start → n] + [1 → end] as in Q give it always moves in front means anticlockwise
var mostVisited = function(n, rounds) { 

    let start= rounds[0];
    let end = rounds[rounds.length-1];

    let ans=[];

    if(start<=end){

        for(let i= start; i<=end; i++) ans.push(i);//Extra lap happens only in [start → end] this is the answer
    }
    else{//start>=end
        //Extra lap wraps: [start → n] + [1 → end] this is the answer

        for(let i=start; i<=n; i++) ans.push(i);
        for(let i=1; i<=end; i++) ans.push(i);
    }
    
    ans.sort((a, b) => a - b);
    return ans;
};
console.log(mostVisited(4,[1,3,1,2])); //[1,2]
console.log(mostVisited(2,[2,1,2,1,2,1,2,1,2])); //[2]
console.log(mostVisited(7,[1,3,5,7])); //[1,2,3,4,5,6,7]