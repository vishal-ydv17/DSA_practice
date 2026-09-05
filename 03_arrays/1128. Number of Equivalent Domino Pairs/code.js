/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes){

    let map= new Map();
    let count=0;

    for(let domino of dominoes){
        //always put smaller number first and multipy by 10 as domino can have 0-9 val so take more than that to avoid the same key eg: [1,4] = 1+4=5 and [3,2]=3+2=5 so multiply 10 to avoid 
        let key = (Math.min(domino[0], domino[1])) *10 + Math.max(domino[0], domino[1]);

        if(map.has(key)){//if already seen this domino before

            count += map.get(key);
            map.set(key, map.get(key) + 1)//then increase one count
        }
        else{
            map.set(key,1);
        }
    }
    return count;
}
console.log(numEquivDominoPairs([[1,2],[2,1],[3,4],[5,6]])); //1
console.log(numEquivDominoPairs([[1,2],[1,2],[1,1],[1,2],[2,2]])); //4


//METHOD-2 IS VERY SLOW 
// var numEquivDominoPairs = function(dominoes) {

//     let count =0;
//     for(let r=0; r<dominoes.length; r++){

//         for(let i=r+1; i<dominoes.length; i++){//dont use dominoes.lenhth-1 as r already starts from 0 

//             let arr1 = dominoes[r].sort((a,b)=>a-b);
//             let arr2 = dominoes[i].sort((a,b)=>a-b);

//             if(arr1[0] == arr2[0] && arr1[1] == arr2[1]){ 
//                 //JSON.stringify(arr1) == JSON.stringify(arr2) //or use this
//                 count++;
//             }
//         }
//     }
//     return count;
// };