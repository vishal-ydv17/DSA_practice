
var maximumWealth = function(accounts) {
    
    let max=0;

    for(let r=0; r<accounts.length; r++){
        
        let tempSum=0;
        for(let c=0; c<accounts[0].length; c++){

            tempSum += accounts[r][c];
        }

        max = Math.max(max, tempSum);
    }

    return max;
};
console.log(maximumWealth([[1,2,3],[3,2,1]])); //6
console.log(maximumWealth([[1,5],[7,3],[3,5]])); //10
console.log(maximumWealth([[2,8,7],[3,6,7],[4,5,6]])); //18