/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
// //sol-1(normal iterative sol)
// //LOGIC- we use using the BFS here 
// var validPath = function(n, edges, source, destination) {
//     //node is not given so use the edges with map to generate the each node neighbors
//     //also if if x is neighbor of y then y is alos neighbor of x 
//     let map={};
//     for(let [x,y] of edges){
//         if(!map[x]) map[x]=[];
//         if(!map[y]) map[y]=[];

//         map[x].push(y);
//         map[y].push(x);
//     }
//     //initially use the 1st node 
//     let q= [source];
//     let visited= new Set();

//     visited.add(source);

//     while(q.length){
//         let curr= q.shift();
//         if(curr===destination){//base condition if found then return 
//             return true;
//         }

//         //get the each node and then iterate of its all neighbors
//         for(let neighbor of map[curr]){

//             if(!visited.has(neighbor)){
//                 visited.add(neighbor);
//                 q.push(neighbor)
//             }
//         }
//     }
//     return false;//after going thought all the neighbors no destion found then return false
// };


//sol-2(recursive sol)
var validPath = function(n, edges, source, destination) {

    let map={};
    for(let [x,y] of edges){
        if(!map[x]) map[x] = [];
        if(!map[y]) map[y] = [];
        map[x].push(y);
        map[y].push(x);
    }

    let visited= new Set();
    var dfs=(curr)=>{
        //base case
        if(curr===destination) return true;

        visited.add(curr);//id curr !== destination then add it in visited 
        //then explore the neighbor of curr
        for(let neighbor of map[curr]){
            
            if(!visited.has(neighbor)){//if neighbor not in visited then add and call dfs
                //as soon as one recursive path finds the destination immediately bubble 
                //true all the way up the call stack
                if(dfs(neighbor)){//mewans if dfs(neighbor) give true that means neighbour
                //exist so if statement runs and return true
                    return true;
                }
            }
        }
        return false;//only false if NO neighbor leads to destination
    }
    return dfs(source);
}