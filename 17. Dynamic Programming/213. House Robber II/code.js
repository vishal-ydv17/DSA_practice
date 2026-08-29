// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
//sol-1(iterative sol and optimized using dp)
// LOGIC: this problem is the same as House Robber I but here the houses are CIRCULAR —
// house 0 and house (n-1) are also neighbors so we cantt rob both of them together
// to avoid ever robbing both the first AND last house in the same run we solve TWO
// separate linear (House Robber I) sub-problems and take the best result
//
//   case1 = robHelper(nums.slice(1, n))     → excludes the FIRST house
//   case2 = robHelper(nums.slice(0, n-1))   → excludes the LAST house
//
// since at least one of {first, last} must always be excluded on a circle checking
// both cases guarantees we never illegally rob both ends while still considering
// every other valid combination of houses
var rob = function(nums) {
    let n= nums.length;
    if(n===0) return 0;
    if(n===1) return nums[0]
    function robHelper(arr){
        let m= arr.length;
        if(m===0) return 0;
        if(m===1) return arr[0];

        let store= [arr[0], Math.max(arr[0], arr[1])];

        for(let i=2; i<m; i++){
            store[i] = Math.max(arr[i] + store[i-2], store[i-1]);
        }
        return store[m-1];
    }

    let case1= robHelper(nums.slice(1, n));//exclude 1st house
    let case2= robHelper(nums.slice(0, n-1));//exclude last house 

    return Math.max(case1, case2);//take max of both possibilities
};

//sol-2(normal recusrsion)
// var rob = function(nums) {
//     let n= nums.length;
    
//     function robHelper(arr){
//         let m= arr.length;

//         function robFrom(i){

//             if(i<0) return 0;
//             if(i===0) return arr[0];

//             return Math.max(arr[i] + robFrom(i-2), robFrom(i-1));
//         }
//         return robFrom(m-1);
//     }
//     let case1= robHelper(nums.slice(1, n));//exclude 1st house
//     let case2= robHelper(nums.slice(0, n-1));//exclude last house 

//     return Math.max(case1, case2);//take max of both possibilities

// }

// //sol-3 (optimized recursion with dp)
// var rob = function(nums) {
//     let n= nums.length;
    
//     function robHelper(arr){
//         let m= arr.length;
        
//         let store={};
//         function robFrom(i){

//             if(i<0) return 0;
//             if(i===0) return arr[0];
            
//             if(!store[i]){
//                 store[i]= Math.max(arr[i] + robFrom(i-2), robFrom(i-1));
//             }
//             return store[i]
//         }
//         return robFrom(m-1);
//     }
//     let case1= robHelper(nums.slice(1, n));//exclude 1st house
//     let case2= robHelper(nums.slice(0, n-1));//exclude last house 

//     return Math.max(case1, case2);//take max of both possibilities

// }