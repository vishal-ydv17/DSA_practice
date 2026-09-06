
var findRelativeRanks = function(score) {

    if(score.length<=0) return [];
//copy the decresing order sorted array and store in soretd varaible
    let sorted= [...score].sort((a,b)=>b-a);
    
    let rankMap= new Map();
    let answer=[];

    for(let i=0; i<score.length; i++){

        if(i==0) rankMap.set(sorted[i],"Gold Medal");
        else if(i==1) rankMap.set(sorted[i],"Silver Medal");
        else if(i==2) rankMap.set(sorted[i],"Bronze Medal");
        else{
            rankMap.set(sorted[i], (i+1).toString());
        }
    }
//lets map the to ranks original array 
    for(let i=0; i<score.length; i++){
        answer.push(rankMap.get(score[i]));//get the key from score then check in rankMap to find corresponding value of that key then store in answer
    }    
    return answer;
};