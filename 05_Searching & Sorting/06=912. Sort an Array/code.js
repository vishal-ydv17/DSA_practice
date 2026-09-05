<<<<<<< HEAD
/**
 * @param {number[]} nums
 * @return {number[]}
 */
//LOGIC-Merrge sort algorithm (O(n log n))
//divide the array into halves recursively until single elements
// then merge them back together in sorted order
var sortArray = function(nums) {
    
    var mergeSort = function(nums){
        //base case
        if(nums.length <=1) return nums;

        let mid = Math.floor(nums.length/2);

        let left = mergeSort(nums.slice(0, mid));//recursively sort the left half (elements before mid)
        let right = mergeSort(nums.slice(mid));

        return merge(left, right);//use helper fuc to sort the single elemnts in array
    }
    //helper fuction
    //merge the 2 sorted list into a single list
    var merge = function(left, right){//lets sort the single element
        let res= [];
        let i=0;
        let j=0;
        //compare elements from both arrays one by one and
        //push the smaller one into res
        while(i<left.length && j<right.length){
            
            if(left[i] < right[j]){
                res.push(left[i]);
                i++;
            }
            else{
                res.push(right[j]);
                j++;
            }
        }
        //once any of array is fully consumed then push the remaining element of that array 
        return [...res, ...left.slice(i), ...right.slice(j)];
    }

    return mergeSort(nums);
=======
/**
 * @param {number[]} nums
 * @return {number[]}
 */
//LOGIC-Merrge sort algorithm (O(n log n))
//divide the array into halves recursively until single elements
// then merge them back together in sorted order
var sortArray = function(nums) {
    
    var mergeSort = function(nums){
        //base case
        if(nums.length <=1) return nums;

        let mid = Math.floor(nums.length/2);

        let left = mergeSort(nums.slice(0, mid));//recursively sort the left half (elements before mid)
        let right = mergeSort(nums.slice(mid));

        return merge(left, right);//use helper fuc to sort the single elemnts in array
    }
    //helper fuction
    //merge the 2 sorted list into a single list
    var merge = function(left, right){//lets sort the single element
        let res= [];
        let i=0;
        let j=0;
        //compare elements from both arrays one by one and
        //push the smaller one into res
        while(i<left.length && j<right.length){
            
            if(left[i] < right[j]){
                res.push(left[i]);
                i++;
            }
            else{
                res.push(right[j]);
                j++;
            }
        }
        //once any of array is fully consumed then push the remaining element of that array 
        return [...res, ...left.slice(i), ...right.slice(j)];
    }

    return mergeSort(nums);
>>>>>>> aed3457f1c2fda034e6693f08bdeb481ed2f0bcc
};