/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
//LOGIC-rort intervals by start time so overlapping ones sit next to each other then walk through
//once comparing each intervals start to the end of the last interval already in ans: if it starts
//early enough to overlap extend that last intervals end (merging them) otherwise push it as 
//a fresh separate interval
var merge = function(intervals) {
    
    // sort by start time so overlapping intervals become adjacent —
    // required for a single left-to-right pass to catch all overlaps
    intervals.sort((a, b) => a[0] - b[0]);

    let ans = [intervals[0]];  // start with the first (earliest-starting) interval already in the result

    for (let i = 1; i < intervals.length; i++) {

        // overlapping check: does the current interval start before (or when) the
        // LAST interval already placed in ans ends
        if (intervals[i][0] <= ans[ans.length - 1][1]) {
            // yes overlap — extend the last intervals end to absorb this one
            // (take the max in case this interval is fully contained inside the last one)
            ans[ans.length - 1][1] = Math.max(ans[ans.length - 1][1], intervals[i][1]);
        }
        else {
            // no overlap — this interval starts a brand new separate group
            ans.push(intervals[i]);
        }
    }
    return ans;
    
};