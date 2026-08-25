/**
 * @param {number[][]} costs
 * @return {number}
 */
//there are 2n people we have to fly n people to A and n people B so 1st we fly all of them to A(or you can fly all of then to B also) and then we sort in decreasing order 
//so now to maximize the profit we will send n max values(profit) people to A 
//and then send remaing to B 
var twoCitySchedCost = function(costs) {
    
    let ans=0;

    //a = [a[0], a[1]] = [costToA, costToB] and similarly for b also
    //a[1] = cost to send this person to city B → bCost
    //a[0] = cost to send this person to city A → aCost
    costs.sort((a,b) => (b[1]-b[0]) - (a[1]-a[0]) );

    //send n people to A from 2n length of sorted list
    for(let i=0; i<costs.length/2;i++){
        ans = ans + costs[i][0]
    }
    //send remaing n left form 2n to B as we have to send half to A and half to B(given in Q)
    for(let i=(costs.length/2); i<costs.length; i++){
        ans= ans + costs[i][1];
    }

    return ans;
};