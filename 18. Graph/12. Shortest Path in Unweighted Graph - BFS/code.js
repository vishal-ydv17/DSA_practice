//LOGIC-to find the shortest dist we will use BFS but in lever order //traversal now we will go at neighbor of each node then increase
//its distance from previous(parent node) + 1 assume all node have 
//distance 1 then we will push this neighbor to q to process for next
//iteration like we will make tneighbor as curr and then explore its 
//neighbor
//NOTE- when the node distace is already calculated then ignore that 
//ore discart that path as it will not be the shortest path as we
//are doing the level order traversal
function shortestDistance(graph, src){
  let dist = new Array(graph.length).fill(Infinity);
  dist[src] = 0;//0 start form source node which is 0 as source to source is 0
  
  let q= [src];//then push this to q for 1st iteration
  while(q.length){
    let curr= q.shift();
    //lets explore the curr neighbors
    for(let neighbor of graph[curr]){
      if(dist[neighbor] === Infinity){
        //neighbor distance is previous distance + 1
        dist[neighbor] = dist[curr] + 1;
        //now push this explored neighbor to q for next iteration to make it as curr
        q.push(neighbor);
      }
      //if(neighbor != Infinity) then ignore it 
      //as if that node distance is already calculate previouly then 
      //it must be shortest than this coz we are doing level order traversal
      //by using the bfs
      
    }
  }
  return dist;
}


const graph=[
  [1,2], //0->1,2
  [3],   //1->3
  [4],   //2->4
  [5],   //3->5
  [3],   //4->3
  []     //5
]

console.log(shortestDistance(graph, 0));//start from 0 as a source




