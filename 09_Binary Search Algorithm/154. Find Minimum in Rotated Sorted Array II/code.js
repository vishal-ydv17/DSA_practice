/**
 * @param {number[]} nums
 * @return {number}
 */
//LOGIC-compare nums[mid] with nums[r] — if greater the minimum lies strictly right of mid
//so discard the left portion (l = mid+1) now if smaller the minimum is at mid or to its left
//so keep it in range (r = mid)now if equal we cant tell which side holds the minimum 
//so shrink safely by one (r--) instead of skipping anything
var findMin = function(nums) {
    let l=0;
    let r=nums.length-1;

    while(l<r){
        let mid= l + Math.floor((r-l)/2);

        if(nums[mid] > nums[r]){
            l= mid+1;
        }
        else if(nums[mid] < nums[r]){
            r= mid;
        }
        else{ //nums[mid] === nums[r] when duplicate then can't decide shrink safely r by 1
            r--;
        }
    }
    return nums[l];
};