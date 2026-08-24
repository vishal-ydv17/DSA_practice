/**
 * @param {string} s
 * @return {string[][]}
 */
//LOGIC-we start at the top with the full string as remainingString and at each node we try every possible
//prefix (substring(0, i)) as a candidate piece — but only commit to it (push into path recurse) if that
//piece is a palindrome then otherwise we skip it entirely now we recurse on whatevers left after removing
//that piece and stop (base case) once remainingString becomes empty — at that point path holds one
//complete valid palindrome partition so we save it
var partition = function(s) {
    
    let ans=[];

    var backtrack =(path, remainingString)=>{
        //base case
        if(!remainingString){//push if there is no remaingString left wo partition
            ans.push([...path]);
            return;
        }

        for(let i=1; i<=remainingString.length; i++){//start form i=1 as in .substring(0,0) gives nothing 

            let choices= remainingString.substring(0,i);//at each iteration partition it from 0 to i
            if(!isPalindrome(choices)) continue;//push in path only when choices after partition is palindrome

            path.push(choices);
            backtrack(path, remainingString.substring(i));//we recurse on whatever characters remain AFTER this piece(means after i check on right side not before i)
            path.pop();
        }
    }
    backtrack([], s);
    return ans;
};
var isPalindrome=function(s){
    let left=0;
    let right=s.length-1;

    while(left<right){
        if(s[left] != s[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}