<<<<<<< HEAD
// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number[]}
//  */
// //sol-1
// //brute force O(nm)-little optimized
// var nextGreaterElement = function(nums1, nums2) {
    
//     let ans=[];
//     for(let i=0; i<nums1.length; i++){
        
//         let j= nums2.indexOf(nums1[i]);// find nums1[i] position in nums2
//         let found=-1;
//         // scan FORWARD from j+1 until we find something bigger or run out
//         for(let k=j+1; k<nums2.length; k++){

//             if(nums2[k]>nums1[i]){
//                 found= nums2[k];// stop at the FIRST greater element found
//                 break;
//             }
//         } 
//         ans.push(found);
//     }
//     return ans;
// };

//sol-2
// optimized - O(n)
// LOGIC - initially we will use nums2 to find the next greater element of that current element in nums2
// to find this we will use a stack and iterate on nums2 from the last index backward,
// popping smaller elements and pushing the greater one if it exists; else push -1
var nextGreaterElement = function(nums1, nums2) {

    let ngeMap={};//use map to link the nums2 elemnt to its next greater element(nge)
    let stack=[];//stores candidates that could be next greater for something to their left
    let n = nums2.length;

    stack.push(nums2[n-1]);//initially push the last element of nums2
    ngeMap[nums2[n-1]]= -1;//if it is last element then there is no greater elemnt so -1

    //now lets ierate on nums2 and find nge from end by checking from last
    for(let i=n-2; i>=0; i--){//as last ement is aready processed

        while(stack.length){
            let top= stack[stack.length-1];

            if(nums2[i] < top){
                ngeMap[nums2[i]] = top;
                break;
            }
            else{//nums2[i] > top
                stack.pop();
            }
        }
        if(stack.length==0){//after too much pop thre is no elemnt left then 
            ngeMap[nums2[i]] = -1;
        }
        stack.push(nums2[i]);//push the current element which we were processing
    }

    //now lets use the map in which we have mapped the element with its greater element by using nums2
    //now if ngeMap consists nums1 element then push its greater element to ans
    let ans=[];
    for(let i=0; i<nums1.length; i++){
        ans.push(ngeMap[nums1[i]])
    }
    return ans;
=======
// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number[]}
//  */
// //sol-1
// //brute force O(nm)-little optimized
// var nextGreaterElement = function(nums1, nums2) {
    
//     let ans=[];
//     for(let i=0; i<nums1.length; i++){
        
//         let j= nums2.indexOf(nums1[i]);// find nums1[i] position in nums2
//         let found=-1;
//         // scan FORWARD from j+1 until we find something bigger or run out
//         for(let k=j+1; k<nums2.length; k++){

//             if(nums2[k]>nums1[i]){
//                 found= nums2[k];// stop at the FIRST greater element found
//                 break;
//             }
//         } 
//         ans.push(found);
//     }
//     return ans;
// };

//sol-2
// optimized - O(n)
// LOGIC - initially we will use nums2 to find the next greater element of that current element in nums2
// to find this we will use a stack and iterate on nums2 from the last index backward,
// popping smaller elements and pushing the greater one if it exists; else push -1
var nextGreaterElement = function(nums1, nums2) {

    let ngeMap={};//use map to link the nums2 elemnt to its next greater element(nge)
    let stack=[];//stores candidates that could be next greater for something to their left
    let n = nums2.length;

    stack.push(nums2[n-1]);//initially push the last element of nums2
    ngeMap[nums2[n-1]]= -1;//if it is last element then there is no greater elemnt so -1

    //now lets ierate on nums2 and find nge from end by checking from last
    for(let i=n-2; i>=0; i--){//as last ement is aready processed

        while(stack.length){
            let top= stack[stack.length-1];

            if(nums2[i] < top){
                ngeMap[nums2[i]] = top;
                break;
            }
            else{//nums2[i] > top
                stack.pop();
            }
        }
        if(stack.length==0){//after too much pop thre is no elemnt left then 
            ngeMap[nums2[i]] = -1;
        }
        stack.push(nums2[i]);//push the current element which we were processing
    }

    //now lets use the map in which we have mapped the element with its greater element by using nums2
    //now if ngeMap consists nums1 element then push its greater element to ans
    let ans=[];
    for(let i=0; i<nums1.length; i++){
        ans.push(ngeMap[nums1[i]])
    }
    return ans;
>>>>>>> aed3457f1c2fda034e6693f08bdeb481ed2f0bcc
}