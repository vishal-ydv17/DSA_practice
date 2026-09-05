var findShortestSubArray = function(nums) {
    let freqMap= {};
    let firstMap= {}; 
    let lastMap= {};

    for(let i=0; i<nums.length; i++){

        //set the freq
        freqMap[nums[i]] = (freqMap[nums[i]] || 0) + 1;

        //set first occurence index (set only for once)
        if(firstMap[nums[i]]==undefined){
            firstMap[nums[i]]= i;
        }
        //always set last occurence index
        lastMap[nums[i]]=i;
    }

    //find max freqMap degree
    let Maxfreq= 0;
    for(let num in freqMap){

        let temp= freqMap[num]
        Maxfreq= Math.max(temp, Maxfreq);
    }

    //smallest subarray length for Max frequency
    let minLength= nums.length; //for worst case
    for(let num in freqMap){

        if(freqMap[num]==Maxfreq){
            let temp= lastMap[num]-firstMap[num] + 1;
            minLength= Math.min(temp, minLength);
        }
    }

    return minLength;
}
console.log(findShortestSubArray([1,2,2,3,1])); // Output: 2
console.log(findShortestSubArray([1,2,2,3,1,4,2])); // Output: 6