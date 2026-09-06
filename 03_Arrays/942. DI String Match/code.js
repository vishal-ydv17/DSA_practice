
var diStringMatch = function(s) {

    let low=0; //current min available val
    let high=s.length; //current max available val

    let res=[];

    for(let i=0; i<s.length; i++){

        if(s[i]=='I'){
            res.push(low);
            low++;
        }
        else{//s[i]=='D'
            res.push(high);
            high--;
        }
    
    }
    // Add the last number (low === high at this point)
    res.push(low);//or res.push(high);

    return res;
};
console.log(diStringMatch("IDID")); // [0,4,1,3,2]
console.log(diStringMatch("III")); // [0,1,2,3]
console.log(diStringMatch("DDI")); // [3,2,0,1]