var shortestToChar = function(s, c) {
    
    let answer= [];
    //note- we will not split s as we only want to read char form s not modify if we wanted to modify then we need split as strings are immutable 

    for(let i=0; i<s.length; i++){//pick char till s.length

        let minDist= Infinity;

        for(let j=0; j<s.length; j++){
        //iterate till s.length and check the each picked char, that == c

            if(s[j]==c){
                
                minDist= Math.min(minDist, Math.abs(i-j));
            }
        }
        answer.push(minDist);
    }
    return answer;
};
console.log(shortestToChar("loveleetcode", "e"));//[3,2,1,0,1,0,0,1,2,2,1,0]
console.log(shortestToChar("aaab", "b"));//[3,2,1,0]