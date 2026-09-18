/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//in this we will use 2 times binary search 
//like from the middle to left side then middle to right side to find the 
//target initial and final position
//Note- we will do normal binary search till our mid != target if equal to 
//target then form that index we will explore left and right
//in other words 1st condition is to find the target then form that we 
//move left or right side
var searchRange = function(nums, target) {
    let index1= -1;
    let index2= -1;

    // step-1 search for leftmost occurrence
    let l=0;
    let r=nums.length-1;

    while(l<=r){
        let mid= l + Math.floor((r-l)/2);

        //even after taget match we search further to find the left most occurance 
        //and search will find it and overwrite index1 with that smaller index if found
        if(target===nums[mid]){
            index1 = mid;
            r = mid-1;//mid found so now search in left side(to find ledt most index if exist) 
        }
        else if(target < nums[mid]){
            r=mid-1;
        }
        else{
            l=mid+1;
        }
    }

    //step-2 search for rightmost occurrence — independent pointers
    let left=0;
    let right=nums.length-1;

    while(left<=right){
        let mid= left + Math.floor((right-left)/2);

        if(target===nums[mid]){
            index2 = mid;
            left = mid+1;//keep searching right after we found nums[mid]==target
        }
        else if(target < nums[mid]){
            right=mid-1;
        }
        else{
            left=mid+1;
        }
    }
    return [index1, index2];

};