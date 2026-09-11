/**
 * @param {string[]} tokens
 * @return {number}
 */
//sol-1
var evalRPN = function(tokens) {
    
    let stack =[];

    for(let tok of tokens){

        if(tok === '+' || tok === '-' || tok === '*' || tok === '/'){

            //note
            //the value popped first is actually the second operand 
            //(it was pushed last) and the value popped second is the first 
            //operand (pushed earlier) so 1st poped value will be num2 then num1
            let num2= stack.pop();
            let num1= stack.pop();

            if(tok==='+') stack.push(num1+num2);
            else if(tok==='-') stack.push(num1-num2);
            else if(tok==='*') stack.push(num1*num2);
            else if(tok==='/') stack.push(Math.trunc(num1/num2));
            //do Math.truc() coz it has asked in Q that we need to truncate toward zero
        }
        else{
            //convert string to number as token has in form of string
            //then push in stack
            stack.push(Number(tok));
        }
            

    }
    return stack[stack.length-1];
};

// //sol-2 (optimized)
// var evalRPN = function(tokens) {
//     let stack =[];

//     for(let tok of tokens){

//         if(tok === '+' || tok === '-' || tok === '*' || tok === '/'){

//             //note
//             //the value popped first is actually the second operand 
//             //(it was pushed last) and the value popped second is the first 
//             //operand (pushed earlier) so 1st poped value will be num2 then num1
//             let num2= stack.pop();
//             let num1= stack.pop();

//             ans = eval(num1 + tok + num2);//eval evaluates or executes a string of
//             //JavaScript code exactly as if it were typed directly into the script
//             //eg: eval("2 + 2") is 4
//             stack.push(Math.trunc(ans));
//         }
//         else{
//             //convert string to number as token has in form of string
//             //then push in stack
//             stack.push(Number(tok));
//         }
            

//     }
//     return stack[stack.length-1];
// }