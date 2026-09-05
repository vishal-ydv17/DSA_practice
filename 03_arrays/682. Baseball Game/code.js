var calPoints = function(operations) {
    let res=[];

    for(let i=0; i<operations.length; i++){

        let curr =operations[i];

        if(!isNaN(curr)){//is not a num (isNaN("5") => false (because "5" can be converted to number 5))
            res.push(parseInt(curr));//parseInt that converts to int to str
        }
        else if(curr=="C"){
            res.pop();
        }
        else if(curr=="D"){
            res.push(2*res[res.length-1]);
        }
        else if(operations[i]==="+"){
            res.push(res[res.length-1] + res[res.length-2]);
        }
    }

    let sum=0;
    for(num of res){
        sum +=num;
    }

    return sum;
};
console.log(calPoints(["5","2","C","D","+"])); // Output: 30
console.log(calPoints(["5","-2","4","C","D","9","+","+"])); // Output: 27