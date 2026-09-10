// //sol-1 shortest distance
// // it works for unweighted graph acyclic or cyclic graph
// //LOGIC-to find the shortest dist we will use BFS but in lever order //traversal now we will go at neighbor of each node then increase
// //its distance from previous(parent node) + 1 assume all node have 
// //distance 1 then we will push this neighbor to q to process for next
// //iteration like we will make tneighbor as curr and then explore its 
// //neighbor
// //NOTE- when the node distace is already calculated then ignore that 
// //ore discart that path as it will not be the shortest path as we
// //are doing the level order traversal
// function shortestDistance(graph, src){
//   let dist = new Array(graph.length).fill(Infinity);
//   dist[src] = 0;//0 start form source node which is 0 as source to source is 0
  
//   let q= [src];//then push this to q for 1st iteration
//   while(q.length){
//     let curr= q.shift();
//     //lets explore the curr neighbors
//     for(let neighbor of graph[curr]){
//       if(dist[neighbor] === Infinity){//only visit unvisited nodes as if the node is already visited then it must have a shorter distance than this
//         //neighbor distance is previous distance + 1
//         dist[neighbor] = dist[curr] + 1;
//         //now push this explored neighbor to q for next iteration to make it as curr
//         q.push(neighbor);
//       }
//       //if(neighbor != Infinity) then ignore it 
//       //as if that node distance is already calculate previouly then 
//       //it must be shortest than this coz we are doing level order traversal
//       //by using the bfs
      
//     }
//   }
//   return dist;
// }


// const graph=[
//   [1,2], //0->1,2
//   [3],   //1->3
//   [4],   //2->4
//   [5],   //3->5
//   [3],   //4->3
//   []     //5
// ]

// console.log(shortestDistance(graph, 0));//start from 0 as a source




//sol-2 shortest path
// it works for unweighted graph acyclic or cyclic graph
//LOGIC- to find the shortest path we will use the same logic as above but we will also keep 
// track of the parent of each node and then after we reach the destination node we will 
// backtrack from destination to source using the parent array and then reverse it to get the
//shortest path from source to destination
function shortestDistance(graph, src) {
  let dist = new Array(graph.length).fill(Infinity);
  let parent = new Array(graph.length).fill(null); // track how we reached each node
  dist[src] = 0;

  let q = [src];

  while (q.length) {
    let curr = q.shift();

    for (let neighbor of graph[curr]) {
      if (dist[neighbor] === Infinity) {
        dist[neighbor] = dist[curr] + 1;
        parent[neighbor] = curr;   // remember who discovered this neighbor
        q.push(neighbor);
      }
    }
  }

  return { dist, parent };
}
//just for visualization this is how parent array will look like for the above graph when we start from 0
// parent array will look like this [null, 0, 0, 1, 2, 3]
// which means to reach node 1 we came from node 0, to reach node 2 we came from node 0, 
// to reach node 3 we came from node 1, to reach node 4 we came from node 2, to reach node 5 we came from node 3

// Helper function to reconstruct path from src to target using parent array
function getPath(parent, src, target) {
    //edge case: if target is unreachable return null
    if (parent[target] === null && target !== src) return null; // unreachable

    let path = [];
    let curr = target;
    //now we fill path array from target to source using parent array and then reverse it to get the path from source to target
    while (curr !== null) {
        path.push(curr);
        if (curr === src) break;
        curr = parent[curr];
    }
    return path.reverse(); // reverse to get the path from source to target
}

const graph = [
  [1, 2], // 0
  [3],    // 1
  [4],    // 2
  [5],    // 3
  [3],    // 4
  []      // 5
];

const { dist, parent } = shortestDistance(graph, 0);
console.log('distances:', dist);
console.log("path:",getPath(parent, 0, 5)); // should print the shortest path from 0 to 5

//for step by step visualization wwe can print the path from source to each node
for (let i = 0; i < graph.length; i++) {
  console.log(`path 0 -> ${i}:`, getPath(parent, 0, i));
}