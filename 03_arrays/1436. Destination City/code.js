//LOGIC = is store all start and dest city in set to avoid the duplicate and after storeing we only get start city in start set and dest city in dest set so now check dest city should not be in start city set then that is the destination then
var destCity = function(paths) {

    let startSet= new Set();
    let destSet= new Set();

    for(let path of paths){

        startSet.add(path[0]);
        destSet.add(path[1]);
    }
    //check that destSet should not contain the city that are start city 
    for(let city of destSet){

        if(!startSet.has(city)){
            return city;
        }
    }

    return -1;//this condition never satisfy
};
console.log(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]])); //"Sao Paulo"
console.log(destCity([["B","C"],["D","B"],["C","A"]])); //"A"
console.log(destCity([["A","Z"]])); //"Z"