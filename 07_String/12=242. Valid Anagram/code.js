/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//sol-1(using object)
var isAnagram = function(s, t) {
    
    //return s.split("").sort().join("") === t.split("").sort().join("");
    //OR
    if(s.length != t.length) return false;
    let obj={};//or here i have used object but map can also be used
    for(let key of s){
        if(!obj[key]){
            obj[key]=1;
        }
        else{
            obj[key]++;
        }
    }
    for(let char of t){
        if(!obj[char]){
            return false;
        }
        //reduce the char count from obj if checked as from s only we have to create t means after matching there should be 0 freaw of all keys
        else{
            obj[char]--;
        }
            
    }
    return true;
}

// //sol-2(using map)
// var isAnagram = function(s, t) {
//     let mymap= new Map();

//     for(let char of s){
//         if(!mymap.has(char)){
//             mymap.set(char, 1)
//         }
//         else{
//             mymap.set(char, (mymap.get(char) || 0) + 1);
//         }
//     }
//     for(let char of t){
//         if(!mymap.has(char)){
//             return false;
//         }
//         else{
//             mymap.set(char, mymap.get(char)-1);
//             if(mymap.get(char)<0)return false;
//         }
//     }
//     return true;
// }