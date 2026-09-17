/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//LOGIC-use binary search so for that find mid if nums[mid] < target then it means left side
//portion is sorted else right side potion is sorted
//now again check if target lie in nums[l] < target < nums[mid] then write binary search cond
//similary for else case also see code you will understand
//so core logic is we need figure out which half is sorted and wheather target is in this 
//sorted side if yes then search in this side else search in other side 
var search = function(nums, target) {
    
    let l = 0;
    let r = nums.length-1;

    while(l<=r){
        let mid = l + Math.floor((r-l)/2);

        if(nums[mid]===target){
            return mid;//return the index of target
        }
        //use = to handle 2-element ranges where l===mid
        if(nums[l] <= nums[mid]){//left side [l..mid] is sorted

            if(target < nums[mid] && nums[l] <= target){
                r = mid-1;
            }
            else{
                l = mid+1;
            }
            
        }
        else{//nums[r] > nums[mid])  right side [mid..r] is sorted
            if(nums[mid] < target && target <= nums[r]){
                l = mid+1;
            }
            else{
                r = mid-1;
            }
        }
    }
    return -1;//return if target not found
};