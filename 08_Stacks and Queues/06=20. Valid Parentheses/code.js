/**
 * @param {string} s
 * @return {boolean}
 */
// //sol-1 NOTE-only works if there was no 2 consdtion 
// //Open brackets must be closed in the correct order
// //so we need to close this bracketes in order not randomly
// var isValid = function(s) {
    
//     let count1= 0;//count for )
//     let count2= 0;//count for ]
//     let count3= 0;//count for }

//     for(let val of s){
//         if(val==="("){
//             count1++;
//         }
//         else if(val===")"){
//             count1--;
//         }

//         if(val==="["){
//             count2++;
//         }
//         else if(val==="]"){
//             count2--;
//         }

//         if(val==="{"){
//             count3++;
//         }
//         else if(val==="}"){
//             count3--;
//         }
//     } 
//     if(count1===0 && count2===0 && count3===0){
//         return true;
//     }
//     else{
//         return false;
//     }
// };

//so beacuse of 2nd condition we have to use the stack 
var isValid = function(s) {

    let stack=[];
    //note in js we dont have stack.pop() so we use stack[stack.length-1]
    //we only have push, pop
    
    for(let val of s){
        if(val ==='(' || val==='[' || val==='{'){
            stack.push(val);
        }
        //if it match the order like 2nd condition then pop/remove last element
        else if((val===')' && stack[stack.length-1]==='(') ||
                (val===']' && stack[stack.length-1]==='[') ||
                (val==='}' && stack[stack.length-1]==='{')) {
            stack.pop();
        }
        else{//if there is nothing to match then return false
            return false;
        }

    }
    return stack.length===0;
}