/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function(rows, cols, rCenter, cCenter) {
    
    let arr=[];

    for(let r=0; r<rows; r++){

        for(let c=0; c<cols; c++){

            let dist= Math.abs(rCenter-r) + Math.abs(cCenter-c);
            arr.push({
                distance: dist,
                coor: [r,c]
            });//we store dist and coordinated both so tha later we use dist to sort then return all coordinates
        }
    }

    arr.sort((a,b)=>a.distance-b.distance);//coz inside arr we have an object so thats why a.distance

    let res = arr.map(cell=>cell.coor); //this gets coor from arr each time
    return res;

};
console.log(allCellsDistOrder(1,2,0,0)); //[[0,0],[0,1]]
console.log(allCellsDistOrder(2,2,0,1)); //[[0,1],[0,0],[1,1],[1,0]]
console.log(allCellsDistOrder(2,3,1,2)); //[[1,2],[0,2],[1,1],[0,1],[1,0],[0,0]]