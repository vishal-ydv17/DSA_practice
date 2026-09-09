
// NO Q FOUND IN LEETCODE
//LOGIC-in this we will not do the normal dfs but we also keep the track of the parent
//of the parent of the current node and if we find a neighbor which is already visited 
//and is not the parent of the current node then we have found a cycle

function hasCycle(edges) {

    let graph = {};
    for(let [x,y] of edges){
        if(!graph[x]) graph[x]=[];
        if(!graph[y]) graph[y]=[];
        graph[x].push(y);
        graph[y].push(x);
    }

    let visited= new Set();
    var dfs= function(curr, parent){
        visited.add(curr);
        for(let neighbor of graph[curr]){

            if(!visited.has(neighbor)){
                //here return because if we found a cycle in the neighbor we want to return true to the previous call
                // we can also write it like this 
                if(dfs(neighbor, curr)){//coz for a neighbor we have curr as its parent
                    return true;//dont return immediately because we want to check all the neighbors of the current node and if any of them has a cycle then we return true
                }
                //dont use return dfs(neighbor, curr);
            }
            else if(visited.has(neighbor) && neighbor != parent){
                return true;//found a cycle
            }
        }
        return false;//if we have traversed all the neighbors and not found any cycle return false
    }
    return dfs(0, -1);//start from 0 and -1 as parent of 0 is -1 as it has no parent
    
}



console.log(hasCycle([[0,1],[1,2],[2,0]]))//true
// true ->0->1->2->0 forms a cycle
console.log(hasCycle([[0,1],[1,2],[2,3]]))//false
// false ->0->1->2->3 no cycle
