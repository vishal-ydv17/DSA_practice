//LOGIC- we sort both then we give min cookies size to each child
//with min greed if cookies is samall than gree we check for new 
//cookis till the child satisfy
var findContentChildren = function(g, s) {
    
    g.sort((a,b)=>a-b);
    s.sort((a,b)=>a-b);
    
    let i=0; //points to the least greedy child 
    let j=0; //points to the min or smallest cookies 
    let count=0; 

    //s[j] is min size cookie and g[i] is min child requirement of child
    while(i<g.length && j<s.length){ 
        //if size of cookies greater or eqaul thean we satisfy child
        if(s[j] >= g[i]){
            i++;
            count++;
        }
        j++;//if current cookies did not satisfy chiled then take bigger cookies while i remain points to child
    }
    return count;

};