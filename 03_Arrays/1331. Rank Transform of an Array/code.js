var arrayRankTransform = function(arr) {
    
    let sorted = [...new Set(arr)].sort((a, b) => a - b);//remove duplicates is arr is put in Set as set only takes unique values
    
    //get all ranks from element
    let map = new Map();
    
    for(let i = 0; i < sorted.length; i++) {

        map.set(sorted[i], i + 1); //rank starts from 1
    }
    
    //use original arr to set the rank of their elements
    let result = [];
    for(let num of arr) {

        result.push(map.get(num));
    }
    
    return result;
};
console.log(arrayRankTransform([40,10,20,30])); //[4,1,2,3]
console.log(arrayRankTransform([100,100,100])); //[1,1,1]
console.log(arrayRankTransform([37,12,28,9,100,56,80,5,12])); //[5,3,4,2,8,6,7,1,3]git 