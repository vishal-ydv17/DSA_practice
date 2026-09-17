/**
 * @param {number[]} nums
 * @return {number}
 */
//LOGIC-so we need to find at what poit array was rotated and return its value
//in another words i say return min value in rotated array
//if nums[mid] > nums[r] so it means the min lies in 
//the right half so discard everything left of mid and including mid
//otherwise the right half is sorted and the min can be at mid or further left
//of mid so we keep mid in range
var findMin = function(nums) {
    let l=0;
    let r=nums.length-1;

    while(l<r){
        let mid = l + Math.floor((r-l)/2);

        if(nums[mid] > nums[r]){
            l = mid+1;// min is strictly to the right of mid
        }
        else{// nums[mid] <= nums[r] min is at mid or to its left
            r=mid;
        }
    }
    return nums[l];
};