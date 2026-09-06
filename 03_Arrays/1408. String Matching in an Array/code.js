
var stringMatching = function(words) {
    
    let resultSet= new Set();//use set to avoid duplicates as diff element can have same substring

    for(let i=0; i<words.length; i++){

        for(let j=0; j<words.length; j++){

            if(i != j && words[i].includes(words[j])){

                resultSet.add(words[j]);//add is used in set not push(as push is used in arr)
            }
        }
    }
    return [...resultSet];//convert set to arr by using spread operator
};
console.log(stringMatching(["mass","as","hero","superhero"])); //["as","hero"]
console.log(stringMatching(["leetcode","et","code"])); //["et","code"]
console.log(stringMatching(["blue","green","bu"])); //["bu"]