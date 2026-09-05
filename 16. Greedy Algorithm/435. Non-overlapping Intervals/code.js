/**
 * @param {number[][]} intervals
 * @return {number}
 */
//LOGIC-sort intervals by their end time — greedily and the interval that finishes earliest is
//always the best one to keep since it leaves maximum room for later intervals now track k as the
//end of the last interval we decided to keep if the next interval starts before k (overlap)
//remove it (count it but dont update k since the earlier-ending interval already kept is the better choice) 
//otherwise keep it and update k to its end
var eraseOverlapIntervals = function(intervals) {
    
    intervals.sort((a,b)=> a[1]-b[1]);//sort on the basis of end intervals eg: [[1,2],[2,3],[3,4]]->2,3,4 (on this)

    let removeCount=0;
    let k= -Infinity;//it keeps the previous end index of interval eg: [[1,2],[2,3]] -> k=2 -> k=3

    for(let i=0; i<intervals.length; i++){
        // if this interval starts BEFORE the last kept interval ends they overlap
        if(intervals[i][0] < k){
            removeCount++;//means we found a overlapping interval so this should be removed
        }
        else{//if no overlapping interval found then move k the next interval end
            k = intervals[i][1];
        }
    }
    return removeCount;
};