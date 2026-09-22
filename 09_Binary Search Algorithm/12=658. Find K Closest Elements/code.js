/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
//LOGIC- binary search over the windows starting index (not the elements themselves)
//at each mid compare the window [mid, mid+k-1] against the window one step right
//[mid+1, mid+k] by checking whether arr[mid+k] (the new element gained) is closer 
//to x than arr[mid] (the element that would be dropped)
//if the shifted window is strictly better move l right otherwise the current window
//(or something left of the shift) is at least as good so bring r down
//this converges on the single best starting index
var findClosestElements = function(arr, k, x) {
    let l=0;
    let r=arr.length-1;

    while(l<r){
        let mid= l + Math.floor((r-l)/2);
        // directional comparison — NOT abs() coz if we found same diff then we need 
        //to follow the rule of preferring the smaller/left element so if we use abs 
        //we wont be able to find in which direction window should be moved
        if(arr[mid+k]-x < x-arr[mid]){
            l= mid+1;//arr[mid] is farther below x than arr[mid+k] is above → shift right
        }
        else{
            r= mid;
        }
    }

    return arr.slice(l, l+k);//or in plcae of l we can wright r also as l,r coincide
    //OR
    // let ans=[];
    // for(let i=l; i<l+k; i++){
    //     ans.push(arr[i])
    // }
};