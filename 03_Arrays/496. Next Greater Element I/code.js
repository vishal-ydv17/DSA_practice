var nextGreaterElement = function(nums1, nums2) {
    
    ans=[];
    
    for(let i=0; i<nums1.length; i++){
        
        let nextGreater= -1;
        let index = nums2.indexOf(nums1[i]);//find the poition of nums1[i] in nums2
        //search to the right for the next greater element
        for(let j = index+1; j<nums2.length; j++){
            
            if(nums2[j]>nums2[index]){
                nextGreater = nums2[j];
                break;// stop because we only need the FIRST greater element
            }
        }
        ans.push(nextGreater);
    }
    return ans;
};
console.log(nextGreaterElement([4,1,2],[1,3,4,2])); //[-1,3]