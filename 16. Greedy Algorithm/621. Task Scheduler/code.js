/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
//LOGIC-Count each tasks frequency using a map and track the highest frequency (maxfreq) plus  
//how many different tasks tie for that max (countOfMaxFreqCharacters). Build the schedule 
//around the most frequent task, spaced out with n-sized cooldown gaps: (n+1)*(maxfreq-1) covers 
//the full blocks +countOfMaxFreqCharacters covers the final row (since every tied task needs a 
//slot there too) and if there are enough other tasks to fill every gap with zero idle time, the 
//real answer is simply tasks.length — so return whichever is larger
var leastInterval = function(tasks, n) {
    
    let freq = new Map();
    let maxfreq = 0;

    // count frequency of each task using the map
    for (let task of tasks) {
        freq.set(task, (freq.get(task) || 0) + 1);  
        maxfreq = Math.max(maxfreq, freq.get(task)); 
    }

    // count how many DIFFERENT tasks share the same max frequency
    let countOfMaxFreqCharacters = 0;
    for (let count of freq.values()) {
        if (count === maxfreq) {  
            countOfMaxFreqCharacters++;
        }
    }

    // formula by observation (you get this when you schedule tasks by hand)
    // take the most frequent task space it out with cooldown gaps
    // and hope other tasks fill those gaps
    let cycles = (n + 1) * (maxfreq - 1) + countOfMaxFreqCharacters; 

    // if there are enough OTHER tasks to fill every gap no idle time is needed —
    // answer is just the total number of tasks
    return Math.max(cycles, tasks.length);
};