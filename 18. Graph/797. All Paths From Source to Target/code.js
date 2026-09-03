/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
//LOGIC- we use dfs but back of the head is backtracking coz we we need to track the path
//so now start form 0th node then explore its neighbors like we push neighbor in path call
//backtrack/dfs then pop neighbor then as we need to explore othr neighbor of same node
//coz there might be different path (make the tree/backtacking diagram then you will understand)
var allPathsSourceTarget = function(graph) {
    let startNode=0;
    let endNode=graph.length-1

    let allPath=[];

    var dfs=(curr, path)=>{

        if(curr===endNode){
            allPath.push([...path]);//copy the path
            return;
        }
        //iterate of node of each neighbor then add to path and call dfs for that 
        //after that pop neighbor form path then for next neighbor do again 
        //coz we need to explore all the neighbor and pop coz we need new path each time
        for(let neighbor of graph[curr]){
            
            path.push(neighbor);
            dfs(neighbor, path);
            path.pop(neighbor);
        }
    }
    dfs(startNode, [startNode]);//or dfs(0, [0]); where [0] is the path

    return allPath;
};