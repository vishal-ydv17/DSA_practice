/**
 * @param {string[]} words
 * @return {string[]}
 */
 
var commonChars = function(words) {
    
    let commonMap= new Map();//use this map to check other words also

    for(let char of words[0]){
        commonMap.set(char, (commonMap.get(char) || 0) + 1);
    }

    for(let i=1; i<words.length; i++){

        let currentMap =new Map();//store each word in this arr then use later to compare with commonaMap for min freq of that char

        for(let char of words[i]){
            currentMap.set(char, (currentMap.get(char) || 0) + 1);
        }

        //lets set the min char in main map that is commonMap by comapreing currentMap
        for(let [char, freq] of commonMap){
            
            if(currentMap.has(char)){
                commonMap.set(char, Math.min(freq, currentMap.get(char)))
            }
            else{
                commonMap.set(char, 0);
            }
        }
        //remove the char from commonMap which have 0 freq for each word and move to next word form words
        for(let [char, freq] of commonMap){
            if(freq==0){
                commonMap.delete(char)
            }
        }
    }
    //convert commonMap to arr to get all the char which are not having freq as 0
    let arr= [];
    for(let [char,freq] of commonMap){
        for(let i=0; i<freq; i++){
            arr.push(char);
        }
    }

    return arr;

};
console.log(commonChars(["bella","label","roller"])) //output is: ["e","l","l"] 