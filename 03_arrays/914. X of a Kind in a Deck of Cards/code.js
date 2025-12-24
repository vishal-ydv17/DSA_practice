var hasGroupsSizeX = function(deck) {

    deck.sort((a,b)=>a-b);
    let freqArr= [];
    let currCount= 1;

    //we deliberately go to last deck.length so that else condition satisfy
    for(let i=0; i<deck.length; i++){
        
        if(deck[i] == deck[i+1]){
            currCount++;
        }else{
            freqArr.push(currCount);
            currCount = 1;
        }
    }
    
    //logic is we will choose a values from 2 to minFreq and will be used to divide both deck.length and freqArr equally 
    let minFreq= Math.min(...freqArr);

    // Check group sizes from 2 to minFreq
    for(let groupSize = 2; groupSize <= minFreq; groupSize++) {
        
        // Check if groups divide deck evenly
        if(deck.length % groupSize !== 0) continue;
        
        // Check if all frequencies are divisible by groupSize
        if(freqArr.every(freq => freq % groupSize === 0)) {
            return true;
        }
    }
    return false;
};
console.log(hasGroupsSizeX([1,2,3,4,4,3,2,1])); //true
console.log(hasGroupsSizeX([1,1,1,2,2,2,3,3]));//true
console.log(hasGroupsSizeX([1]));  //false
    
//or if you do not want to use .every method


// // Check if all frequencies are divisible by groupSize
// let valid = true;
// for(let freq of freqArr){
//     if(freq % groupSize !== 0){
//         valid = false;
//         break;
//     }
// }
// if(valid) return true;

