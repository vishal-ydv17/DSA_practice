var merge = function(nums1, m, nums2, n) {
    let arr=[];

    arr.push(...nums1.slice(0,m), ...nums2.slice(0,n));// use slice to remove 0

    arr.sort((a,b)=>a-b);
    //copy arr value in the nums1 array
    nums1.length=0;
    nums1.push(...arr);

    return nums1;
};
console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3)); //[1,2,2,3,5,6]
console.log(merge([1], 1, [], 0)); //[1]


//technique 02: in place merging without extra space

// var merge = function(nums1, m, nums2, n) {
//     let i=m-1;//we dont start from 0 as each time we add element we need to shift aal vlue to the end 
//     let j=n-1;
//     let k=m+n-1;

//     while(i>=0 && j>=0){
//         if(nums1[i]>nums2[j]) {
//             nums1[k]=nums1[i];
//             i--;
//         }else{
//             nums1[k]=nums2[j]
//             j--;
//         }
//         k--;

//     }
//     // copy remaining nums2 elements (if any)
//     while(j>=0){
//         nums1[k]=nums2[j];
//         k--;
//         j--;
//     }
//     return nums1;
// };