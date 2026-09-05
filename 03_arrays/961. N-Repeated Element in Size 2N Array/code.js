var repeatedNTimes = function(nums) {
    const map = new Map();
    
    for (let num of nums) {
        if (map.has(num)) {
            return num; 
        }
        map.set(num, 1);
    }
    return -1;//this condition never full fill as in question given altleast we have 1 val that will satisfy
};
console.log(repeatedNTimes([1,2,3,3])); //3
console.log(repeatedNTimes([2,1,2,5,3,2])); //2
console.log(repeatedNTimes([5,1,5,2,5,3,5,4])); //5