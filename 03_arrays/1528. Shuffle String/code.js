
var restoreString = function(s, indices) {
    
    let res=  new Array(s.length);

    for(let i=0; i<s.length; i++){

        let index= indices[i];
        let val= s[i];

        res[index] = val;
    }

    return res.join('');
};
console.log(restoreString("codeleet",[4,5,6,7,0,2,1,3])); //"leetcode"
console.log(restoreString("abc",[0,1,2]));  //"abc"