//  LOGIC- is we have count if element in arr1 is valid or not. So it is not valid if absolute diff is <=d and valid in other case;
var findTheDistanceValue = function(arr1, arr2, d) {
    
    let count=0;

    for(let i=0; i<arr1.length; i++){

        let arr1_element_valid= true;//assume element in arr1 is valid

        for(let j=0; j<arr2.length; j++){

            if(Math.abs(arr1[i] - arr2[j]) <= d) {
                //if <=d then not valid so set as false that not valid
                arr1_element_valid=false; 
            }
        }

        if(arr1_element_valid==true) count++;
    }
    return count;
};
console.log(findTheDistanceValue([4,5,8],[10,9,1,8],2));//2
console.log(findTheDistanceValue([1,4,2,3],[-4,-3,6,10,20,30],3));//2
console.log(findTheDistanceValue([2,1,100,3],[-5,-2,10,-3,7],6));//1