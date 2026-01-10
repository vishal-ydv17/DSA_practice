var kWeakestRows = function(mat, k) {
    
    let rows=[];
    let result=[];

    for(let r=0; r<mat.length; r++){

        let strength=0;
        for(let c=0; c<mat[0].length; c++){

            strength += mat[r][c];
        }
        rows.push([strength, r]);
    }

    rows.sort((a,b)=>{

        //here a is array as rows is like eg: [[strength,r],[strength,r]]
        if(a[0]==b[0]) return a[1]-b[1] //if same strength sort on basis of row oder that is 
        else return a[0]-b[0] 
    });

    for(let i=0; i<k; i++){//we need order till k (given in Q)

        result.push(rows[i][1]);//we get all row order of strength by setting 1 
    }

    return result;
};
console.log(kWeakestRows([[1,1,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,1,0,0,0],[1,1,1,1,1]],3)); //[2,0,3]    
console.log(kWeakestRows([[1,0,0,0],[1,1,1,1],[1,0,0,0],[1,0,0,0]],2)); //[0,2]
