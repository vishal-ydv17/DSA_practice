
var average = function(salary) {
    
    salary.sort((a,b)=>a-b);

    let totalSum= 0;

    for(let i=1; i<salary.length-1; i++){

        totalSum += salary[i];
    }

    return totalSum / (salary.length-2) ; 
};
console.log(average([4000,3000,1000,2000])); //2500.00000
console.log(average([1000,2000,3000])); //2000.00000