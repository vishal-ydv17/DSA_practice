/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
//LOGIC: versions go good, good, good... then flip to bad, bad, bad forever after so we need to find exactly where that it flips
//noq at each guess (mid): if its bad then the answer could be this one or
//something earlier so keep mid in play and shrink from the right (r = mid)
//If its good then the answer must be later so move past it (l = mid + 1)
//Keep halving until l and r meet thats is our answer
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let l=1;
        let r=n;

        while(l<r){
            let mid = l + Math.floor((r-l)/2);
            
            if(isBadVersion(mid)===true){//if bad version 
                r=mid;//mid might be the answer so keep it in range
            }
            else{//if good version then search in right side
                l=mid+1;//mid is good, answer is strictly after it
            }
        }
        return l;// l === r (coincides) then  guaranteed to be the first bad version
    };
};