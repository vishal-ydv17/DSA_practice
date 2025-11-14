var findContentChildren = function(g, s) {
    
    g.sort((a,b)=>a-b);
    s.sort((a,b)=>a-b);
    //By sorting we ensure that if a cookie can't satisfy the current child, it can't satisfy any remaining children either
    
    let i=0; //points to the least greedy child 
    let j=0; //points to the min or smallest cookies 
    let count=0; 

    //s[j] is min size cookie and g[i] is min child requirement of child
    while(i<g.length && j<s.length){ 

        if(s[j] >= g[i]){
            i++;
            count++;
        }
        j++;//if current cookies did not satisfy chiled then take bigger cookies
    }
    return count;

};

console.log(findContentChildren([1,2,3],[1,1])); //1
console.log(findContentChildren([1,2],[1,2,3])); //2