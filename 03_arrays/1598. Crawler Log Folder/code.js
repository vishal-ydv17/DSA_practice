//LOGIC- in js we do not have seperate stack so we use array but restrict ourself to use only push(), pop(), peek() methods so that array will behave like a stack 
//if we have ../ then we pop from stack else we push if anything other than ../ and will do nothing if ./ 
var minOperations = function(logs) {
    
    let path_stack= [];

    for(let log of logs){

        if(log=='../'){

            if(path_stack.length>0){

                path_stack.pop();
            }
        }
        else if(log != './'){
            
            path_stack.push(log);
        }
    }

    return path_stack.length;
};
console.log(minOperations(["d1/","d2/","../","d21/","./"])); //2
console.log(minOperations(["d1/","d2/","d3/","../","d31/"])); //3
console.log(minOperations(["d1/","../","../","../"])); //0

// //method-2   without using stack as we need to count how far are we from main folder

// var minOperations = function(logs) {

//     let distance=0;

//     for(let log of logs){

//         if(log=='../'){

//             if(distance > 0){
//                 distance--;
//             }
//         }
//         else if(log != './'){
//             distance++;
//         }
//     }

//     return distance;
// }