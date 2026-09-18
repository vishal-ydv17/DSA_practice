/**
 * @param {number[]} arr
 * @return {number}
 */
//LOGIC-note here we will not compare the arr[l] or arr[r] with the arr[mid]
//coz there can be case where arr[l] < arr[mid] and in bw left and mid our max 
//value can lie eg: [1, 2, 3, 10, 9, 8, 7, 6, 5] see 9 is mid and greater than left
//but our max value lie in bw (which is 10) but ideally we should have discarted 
//left side search (l=mid+1)
//but instead we need to peak by checking mid neighbor weather we are at peak or
//still climbing the mountain
var peakIndexInMountainArray = function(arr) {
    let l=0;
    let r= arr.length-1;

    while(l<r){
        let mid = l + Math.floor((r-l)/2);

        if(arr[mid] < arr[mid+1]){//still climbing mountain so peak is to the right
            l= mid+1;
        }
        else{
            r= mid;//descending (or at peak)so peak is here or to the left
        }
    }
    return l;
};