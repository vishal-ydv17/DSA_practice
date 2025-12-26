var sortArrayByParityII = function(nums) {
    
    let arr=[];
    let eveni=0;
    let oddi=1;
    
    for(let num of nums){

        if(num%2==0){//even val 

            arr[eveni] = num;
            eveni += 2;
        }
        else{//odd val

            arr[oddi] = num;
            oddi += 2; 
        }
    }
    return arr;
};

console.log(sortArrayByParityII([4,2,5,7])); //[4,5,2,7]
//method2 by using filter method

// var sortArrayByParityII = function(nums) {

//     let evenArr= nums.filter((n)=>n%2==0);//filter returns an array
//     let oddArr= nums.filter((n)=>n%2 !=0);

//     let result= [];//empty array

//     //in Question give half array is even and other half is odd
//     for(let i=0; i<(nums.length)/2; i++){

//         result.push(evenArr[i], oddArr[i]);
//     }
//     return result;
// }