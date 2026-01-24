//LOGIC-questions ask to check if arr can be frmend by using the pieces but not changing the order of arr elements of element eg: [[78],[4,64],[91]] to [[78],[64,4],[91]]
//eg: arr = [91,4,64,78] , pieces = [[78],[4,64],[91]]
//Can we arrange pieces to form arr but withoit changing the order of element in pieces?
//Yes: [91] + [4,64] + [78] = [91,4,64,78] ✓

var canFormArray = function(arr, pieces) {
    
    let map = new Map();
 
    for(let piece of pieces){
        //store [4,64] as it is in map and use key as its 0th element eg: [[78],[4,64],[91]]
        map.set(piece[0], piece)
    }

    //lets match the pieces to arr elements
    let i=0; 
    while(i<arr.length){

        //edge case if 0th element(key) in map did not match return immediately
        if(!map.has(arr[i])) return false;

        //if key is match then lets iterate on keys value(eg:[4,64]) to match next element
        let piece= map.get(arr[i]);//get piece that start with arr[i]
        for(let j=0; j<piece.length; j++){

            if(arr[i+j] != piece[j]){
                return false;
            }
        }

        i += piece.length;//if piece of pieces arr is matched then move i to piece length and check another piece
    }

    return true;
};
console.log(canFormArray([91,4,64,78], [[78],[4,64],[91]])); //true
console.log(canFormArray([49,18,16], [[16,18,49]])); //false
console.log(canFormArray([1,3,5,7], [[2,4,6,8]])); //false