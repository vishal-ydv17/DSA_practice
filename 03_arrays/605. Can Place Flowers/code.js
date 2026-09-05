var canPlaceFlowers = function(flowerbed, n) {

    let count =n;//reduce count if we are planting

    for(let i =0; i<flowerbed.length; i++){
        let curr= flowerbed[i];

        if(curr==1) continue;
        if(curr==0){
//check the boundary value 1st :NOTE last and leftcheck/rightcheck will return boolean valuse
            let leftcheck = (flowerbed[i-1]==0) || (i==0);
            let rightcheck = (flowerbed[i+1]==0) || (i==flowerbed.length-1);
//If i is the last index → no right neighbor → OK  //Otherwise → check actual neighbor i + 1

            if(leftcheck && rightcheck){
                count--;
                flowerbed[i]=1;//mark as planted
            }
            if(count<=0) return true;//early exit if we've planted all needed flowers
        }

    }
    return count<=0;
};

console.log(canPlaceFlowers([1,0,0,0,1],1))//true
console.log(canPlaceFlowers([1,0,0,0,1],2))//false