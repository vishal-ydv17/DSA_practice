
//Lexicographic order = dictionary order = alphabetical order = incresing
var minDeletionSize = function(strs) {
//each elemnt in strs is string so we can directly acess each of the like arrays
//assume line matrix in mathematics ["cba",    c= strs[0][0] (row= left to right)
//                                    "daf",   b= strs[0][1] (col= up to down)
//                                    "ghi",
//                                    "jkl"]                            
//strs have row =4, col=3

    let row = strs.length;
    let col = strs[0].length;//inside strs array , string length of 0 element
    let unsorted_col = 0;

    //c=j=col   (back of head the remember matrix in class 10th maths)
    for(let c=0; c<col; c++){

        for(r=0; r<row-1; r++){//r=i=row  

            if(strs[r][c] > strs[r+1][c]){//check wheather incresing or decresing
                unsorted_col++;//if decreasing
                break;
            }
        }
    } 
    return unsorted_col;
};
console.log(minDeletionSize(["cba","daf","ghi"]));//1
console.log(minDeletionSize(["a","b"])); //0
console.log(minDeletionSize(["zyx","wvu","tsr"]));//3