/**
 * @param {number[]} nums
 * @return {number}
 */
//LOGIC-you will get logic when you plot graph using nums and try to find the
//peak if nums[mid] < nums[mid+1] means peak is on right side so reduce smaple
//space to half make l = mid+1
//if nums[mid] > nums[mid+1] means peak is on left side and also include mid
//as it can be possible peak
var findPeakElement = function(nums) {
    
    let l=0;
    let r=nums.length-1;

    while(l<r){
        let mid = l + Math.floor((r-l)/2);

        //if means peak is right side and need to include mid+1
        if(nums[mid] < nums[mid+1]){
            l= mid+1;
        }
        else{//nums[mid] > nums[mid+1] it means peak is left side and include
            //mid also as it can be possible peak itself
            r= mid;
        }
    }
    return l;//if l and r coincide then that is our peak
    //note there can be multiple peak we need to return one possible peak
};