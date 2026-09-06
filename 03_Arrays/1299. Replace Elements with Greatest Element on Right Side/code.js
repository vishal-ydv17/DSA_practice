/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    
    let res=[];

    for(let i=0; i<arr.length; i++){

        let maxRight=0;

        if(i==arr.length-1) maxRight=-1;//if last element then push -1 given in Q

        for(let j=i+1; j<arr.length; j++){

            if(arr[j]>maxRight) maxRight=arr[j];//fix i then find maxRight from right of that index 
            
        }
        res.push(maxRight);//push what maxRight found from that i index 
    }

    return res;
};
console.log(replaceElements([17,18,5,4,6,1]));//[18,6,6,6,1,-1]
console.log(replaceElements([400]));//[-1]
