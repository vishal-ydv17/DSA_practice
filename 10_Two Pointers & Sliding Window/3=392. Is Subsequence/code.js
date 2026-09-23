/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//LOGIC-we keep two pointers like one on s and another on t
//then we keep checking weather char matches or not if matches move i++ and j++
//also do j++ even if not match to check next char
var isSubsequence = function(s, t) {
    
    let i=j=0;
    while(j<t.length){
        if(s[i]===t[j]){
            i++;
        }
        j++;
    }
    return i===s.length;//if we checked all the element in s then return 
};