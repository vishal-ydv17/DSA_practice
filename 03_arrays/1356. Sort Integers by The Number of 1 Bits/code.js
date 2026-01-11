var sortByBits = function(arr) {

    let countOnes= function(num){

        let count=0;

        while(num){

            if(num & 1) count++ //if num las bit has 1 then increase count

            num= num>>1;//right shift by 1
        }
        return count;
    };
    //OR use this function
    // let countOnes= function (num){

    //     let count=0;
        
    //     let binaryArr= num.toString(2);//converts to binary no then store each single bit in array in form of string 

    //     for(let i=0; i<binaryArr.length; i++){

    //         if(binaryArr[i]==1) count++;
    //     }

    //     return count;
    // }

    let result= arr.sort((a,b)=>{

        let countA= countOnes(a);
        let countB= countOnes(b);

        if(countA==countB) return a-b;//if same no of 1 then sort on basis of element value

        return countA-countB;//sort on basis of 1
    })

    return result;
};
console.log(sortByBits([0,1,2,3,4,5,6,7,8]));//[0,1,2,4,8,3,5,6,7]
console.log(sortByBits([1024,512,256,128,64,32,16,8,4,2,1]));//[1,2,4,8,16,32,64,128,256,512,1024]