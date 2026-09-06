//LOGIC- store the frequency in map then use it to sort. 
//Now when sorting each time get the freq of a(element in nums) and b(element in nums)
//if the both freq is diff then sort in incresing order(increasing given in Q)
//otherwisw sort in decreasing order of a,b element like b-a(given in Q)
var frequencySort = function(nums) {
    
    let mapfreq= new Map();

    for(num of nums){
        
        mapfreq.set(num, (mapfreq.get(num) || 0) + 1);
    }

    return nums.sort((a,b)=>{

        let freqA= mapfreq.get(a);
        let freqB= mapfreq.get(b);

        if(freqA != freqB){

            return freqA-freqB;//accending in frequency
        }
        else{//if same freqA==freqB
            return b-a;//given in question take it as dexreasing oder
        }
    })

};
console.log(frequencySort([1,1,2,2,2,3])); //[3,1,1,2,2,2]
console.log(frequencySort([2,3,1,3,2])); //[1,3,3,2,2]
console.log(frequencySort([-1,1,-6,4,5,-6,1,4,1])); //[-1,5,-6,-6,4,4,1,1,1]