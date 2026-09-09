//Note we already know that topological sort is only possible in directed acyclic graph(DAG) and we can do topological sort using bfs or dfs
//so we can also  use this to check weather graph has cycle or not because if we do topological sort and the length of the ans array is not 
//equal to the number of nodes then it means there is a cycle in the graph
//LOGIC- win this we will use the concept of indegree and queue to do the topological sort using bfs
//step-1 create the indegree array
//step-2 push elements in q if that element have indegree 0/
//step-3 while(q.length) take out curr element form queue and explore
// its neighbors and then reduce its indegree
function topologicalSortBFS(n, graph){
    //step-1 create the indegree array
    const indegree = new Array(n).fill(0);
    for(let i=0; i<n; i++){
        for(let neighbor of graph[i]){
            indegree[neighbor]++;
        }
    }
    //step-2 push elements in q if that element have indegree 0
    let q=[];
    for(let i=0;i<indegree.length; i++){
        if(indegree[i]===0){
            q.push(i);
        }
    }
    //step-3 while(q.length) take out curr element form queue and explore
    // its neighbors and then reduce its indegree
    let ans=[];
    while(q.length){
        let curr= q.shift();
        ans.push(curr);
        for(let neighbor of graph[curr]){
            indegree[neighbor]--;
            if(indegree[neighbor]===0){
                q.push(neighbor);
            }
        }
    }
    //to check if graph has cycle or not
    if(ans.length!==n){
        console.log("Graph has cycle");
    }
    else{
        console.log("Graph has no cycle");
    }
    return ans;
}

const n=6;
const adj = [
    [],     //0
    [],     //1
    [3],    //2->3
    [1],    //3->1
    [0,1],  //4->0,1
    [0,2]   //5->0,2
];

console.log("topological sort is:", topologicalSortBFS(n, adj));