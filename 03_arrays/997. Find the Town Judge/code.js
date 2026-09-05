var findJudge = function(n, trust) {

    let trustCount_from_people = new Array(n + 1).fill(0); // People trusting this i person
    let trustedCount_from_judge = new Array(n + 1).fill(0); // People this person i trusts
    
    //const [a,b] means for 1st cycle loop we have eg:trust = [[1,3],[2,3]]  
    //let [a, b]  means a=1,b=3 
    for (let [a, b] of trust) {
        trustedCount_from_judge[a]++; // a trusts b
        trustCount_from_people[b]++;   // b is trusted by a
    }
    
    //Judge trusts nobody: trustedCount_from_judge[judge] === 0
    //Everyone trusts judge: trustCount_from_people[judge] === n-1
    for (let i = 1; i <= n; i++) {
        if (trustedCount_from_judge[i] === 0 && trustCount_from_people[i] === n - 1) {
            return i;
        }
    }
    
    return -1;
};
console.log(findJudge(2, [[1,2]])); //2
console.log(findJudge(3, [[1,3],[2,3]])); //3
console.log(findJudge(3, [[1,3],[2,3],[3,1]])); //-1