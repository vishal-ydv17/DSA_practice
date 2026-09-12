// /**
//  * @param {number[]} temperatures
//  * @return {number[]}
//  */
// //sol-1 (Brute force) O(n^2)
// //in this we are fixing or taking temperature value than we are comparing all the 
// //temperature values in temperatures array and increasing the count if not matched
// //if match we return the count else if  we reach at last index of temprature array
// //then we push 0 as in ans array 
// var dailyTemperatures = function(temperatures) {
    
//     let ans=[];

//     for(let i=0; i<temperatures.length; i++){
        
//         let count = 0;
//         let found = false;

//         for(let j=i; j<temperatures.length-1; j++){
//             count++;
            
//             if(temperatures[i] < temperatures[j+1]){
                
//                 ans.push(count);
//                 found=true;
//                 break;
//             }
            
//         }
//         if(!found){//if warm day found dont execute(as found=true)
//             ans.push(0);
//         }
//         count=0;
        
//     }
//     return ans;
// };


// //sol-2 (Brute force) O(n^2)- same as above but written in diff way(without using count)
// var dailyTemperatures = function(temperatures) {
    
//     let ans = [];

//     for (let i = 0; i < temperatures.length; i++) {
        
//         let found = false;

//         for (let j = i + 1; j < temperatures.length; j++) {
//             if (temperatures[i] < temperatures[j]) {
//                 ans.push(j - i);
//                 found = true;
//                 break;
//             }
//         }

//         if (!found) {
//             ans.push(0);
//         }
//     }

//     return ans;
// };


//sol-3 (optimized using stack) O(n)
//LOGIC- note here we will work with index not its values but later we check its 
//values eg:in stack we push the index
//and we start from the last index of temp
var dailyTemperatures = function(temperatures) {
    let n= temperatures.length;
    let ans= Array(n).fill(0);
    let stack= [];
    
    stack.push(n-1);
    //we can skip this as we have alredy filled it with 0s but sake of simplicty i have written
    ans[n-1]= 0;//push initial value for last index of temp array

    for(let i= n-2; i>=0; i--){
        while(stack.length){

            let top= stack[stack.length-1];//top is index of last value of temp array
            if(temperatures[i] >= temperatures[top]){//>= coz temp can be duplicate
                stack.pop();
            }
            else{//temperatures[i] < temperatures[top]
                ans[i]= top-i;//if warmer temp found
                break;
            }
        }

        //if we check all the elments and did not found warmer
        if(!stack.length){//again we dont have write this as we have alredy fill ans array with 0
            ans[i] = 0;
        }
        stack.push(i);
    }
    return ans;
}
