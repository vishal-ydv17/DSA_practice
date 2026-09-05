/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 //LOGIC-we choose the box which have highest units 1st. 
 //Because the truck has limited space, and every box takes exactly one space
 //Thats why we sort at index 1 

var maximumUnits = function(boxTypes, truckSize) {
    
    boxTypes.sort((a,b)=>b[1]-a[1]);//sort at index 1 in descending

    let totalUnits=0;//maximum total number of units

    for(let [numberOfBoxes, unitsPerBox] of boxTypes){

        let boxesToTake=Math.min(numberOfBoxes, truckSize);
        //numberOgBoxes<truckSize then only we can put in truck

        totalUnits += boxesToTake*unitsPerBox;
        truckSize -= boxesToTake;
    }
    return totalUnits;
};