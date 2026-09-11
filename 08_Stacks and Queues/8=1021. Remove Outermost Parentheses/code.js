/**
 * @param {string} s
 * @return {string}
 */
// //sol-1
// //LOGIC-we need to remove outer most openiing parenthesis followed by it closing 
// //prenthesis and leave all as it is
// //so we will use stack to store all parentheses so we push each parenthesis one
// //by one in stack then check 
// //For '(' : push first then check
// //         If stack.length > 1,this '(' is NOT the outermost one -> add to ans
// //         (length === 1 means this IS the outermost opening bracket -> skip it)
// //
// //For ')' : check stack.length BEFORE popping.
// //         If stack.length > 1 this ')' is NOT the outermost one -> add to ans
// //         (length === 1 means this IS the outermost closing bracket -> skip it)
// //         Then pop, since this brackets group is done either way
// var removeOuterParentheses = function(s) {
    
//     let stack=[];
//     let ans='';

//     for(let i=0; i<s.length; i++){

//         if(s[i] == '('){

//             stack.push(s[i]);
//             //push only when >1 caz we have to remove outermost parenthesis
//             if(stack.length > 1){
//                 ans = ans + s[i];
//             }
//         }
//         else{//s[i] == ')'

//             if(stack.length > 1){
//                 ans = ans + s[i];//if we fount >! then 1st push in ans then pop 
//             }
//             stack.pop();
//         }
//     }
//     return ans;
// };

//sol-2
//LOGIC - use a balance counter instead of a stack
//nnly skip a bracket when its the OUTERMOST one of a group (balance going 0->1 or 1->0)
//for '(' :> increment balance add to ans only if balance >= 2 (i.e- not the outer one).
//For ')' :> add to ans only if balance >= 2 (not the outer one) then decrement balance
var removeOuterParentheses = function(s) {
    
    let balance=0;
    let ans='';

    for(let i=0; i<s.length; i++){
        
        if(s[i] === '('){
            balance++;

            if(balance >= 2){
                ans = ans + s[i];
            }
        }
        else{//s[i] === ')'s[i] == '('
            if(balance >= 2){
                ans = ans + s[i];
            }
            balance--;
        }
    }
    return ans;
}