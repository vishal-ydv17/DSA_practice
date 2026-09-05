/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
//LOGIC-walk through intervals in three phases: first copy over intervals that end before
//newInterval starts (no overlap, unchanged): Second while intervals overlap with
//newInterval (start <= newIntervals end) expand newInterval to absorb them (min of starts, max of ends)
//then push the fully-merged newInterval once this phase ends: Third copy over whatever
//intervals remain (they start after the merged interval ends so no overlap)
var insert = function(intervals, newInterval) {
    
    let ans=[];
    let n= intervals.length;

    //merge all overlapping intervals into newInterval then push
    let i=0;
    while(i<n && intervals[i][1] < newInterval[0]){
        ans.push(intervals[i]);
        i++
    }

    //push overlapping intervals
    while(i<n && intervals[i][0] <= newInterval[1]){
        newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
        newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
        i++;
    }
    ans.push(newInterval);

    //push remaining right non-overlapping intervals
    while(i<n){
        ans.push(intervals[i]);
        i++;
    }

    return ans;
};