/**
 * @param {number[]} height
 * @return {number}
 */
//LOGIC: Start with the widest container (l=0, r=n-1) and compute its area then move 
//the pointer l,r at the shorter line inward since keeping it can never beat the 
//current area (width only shrinks whose heightt is shorter coz area depend on min height of both) Track the maximum seen.
var maxArea = function(height) {
    
    let l=0;
    let r=height.length-1;
    let maxAr=0;

    while(l<r){
        //Area = height of water × width of container and note area depend on min 
        //height of both l and r so take min of both as water can't rise above the shorter wall
        let ar= Math.min(height[l], height[r]) * (r-l);

        maxAr = Math.max(maxAr, ar);

        if(height[l] < height[r]){
            l++;// left is the limiting wall only moving it can help
        }
        else{
            r--;
        }
    }
    return maxAr
};