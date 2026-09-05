/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    
    let map= new Map();

    for(let num of arr){

        map.set(num, (map.get(num) || 0) + 1);
    }

    for(let num of arr){

        let percentage = (map.get(num) *100) / arr.length

        if(percentage > 25 ) return num;
    }

    return -1; //we never reach this line 
};
console.log(findSpecialInteger([1,2,2,6,6,6,6,7,10])); //6
console.log(findSpecialInteger([1,1])); //1 