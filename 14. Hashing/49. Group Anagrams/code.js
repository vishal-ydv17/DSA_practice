/**
 * @param {string[]} strs
 * @return {string[][]}
 */
//nx m O(log m)
var groupAnagrams = function(strs) {
    
    let obj={};
    for(let i=0; i<strs.length; i++){//runs n times
        
        let sortedStr= strs[i].split("").sort().join("");//mxO(log m)- m is length of a single string

        if(!obj[sortedStr]){//if sorted str is not present then create one and psuh
            obj[sortedStr]= [strs[i]];//create a arr then put the values that is strs[i]
        }
        else{//if present then push it array eg: obj={aet:["ate","eat","tea"]} 
            obj[sortedStr].push(strs[i]);
        }
    }
    return [...Object.values(obj)];//use Object.values() method to iterte over all values of object 
};