//LOGIC- extend the code array to 3 times then use it to fill the sum for n times
//extend coz it will be easy to move lefy/right
//start from middle of the extended as n+ eg: n+i+j (for to move right)
//and for left n+i-j
var decrypt = function(code, k) {
    
    let n= code.length;
    let result= new Array(n).fill(0);

    if(k==0) return result;//as it as all element as 0

    //take 3 as i will be easy to move left/right in extended as we start to fill sum after n elements
    let extended= [...code, ...code, ...code];

    for(let i=0; i<n; i++){

        let sum=0;

        if(k>0){

            for(let j=1; j<=k; j++){
                //start to fill sum from n+ as it will be easy to move left/right
                sum += extended[n+i+j];
            }
        }
        else{//k<0

            for(let j=1; j <= -k; j++){

                sum += extended[n+i-j];//-j coz we need to move left as given in Q
            }
        }

        result[i]=sum;//push sum at correct position in result
    }

    return result;
};
console.log(decrypt([5,7,1,4], 3)); //[12,10,16,13]
console.log(decrypt([1,2,3,4], 0)); //[0,0,0,0]
console.log(decrypt([2,4,9,3], -2)); //[12,5,6,13]