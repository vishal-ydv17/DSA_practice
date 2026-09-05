/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
//sol-1 (using dfs to solve this)
//LOGIC-we do BFS over the original graph using a Map to track original node → cloned node 
//so each node is cloned only once (this handles cycles safely) and for every original node
//iterate its neighbors then clone any unseen neighbor and add it to the map/queue then link
//the current nodes clone to that neighbors clone and this rebuilds the exact same structure
//with entirely new node objects
var cloneGraph = function(node) {
    //edge case
    if(!node) return null;//empty graph has nothing to clone

    let q = [node];//queue holds OLD (original) node
    let visitedMap = new Map();//it keeps the note of old node and new node/copied code
    //clone the starting node first (copy only the val and neighbors filled in later)
    let cloneNode = new Node(node.val);

    //in visited Map keep pair of old node object and new node obeject(copied)
    visitedMap.set(node, cloneNode);

    while(q.length){//lets BFS traverse over the original graph

        let curr = q.shift();//old node

        for(let n of curr.neighbors){//go through each original neighbor of curr

            if(!visitedMap.has(n)){//if this neighbor hasnt been cloned yet:
                q.push(n);
                visitedMap.set(n, new Node(n.val));
            }
            //if already exist in visisted then traverse or explore
            //then set the current node to 
            let cloneCurr = visitedMap.get(curr);//use old node to get new node form map
            //now set the neghbours of new node by getting it form the map
            cloneCurr.neighbors.push(visitedMap.get(n));
        }
    }
    return cloneNode;
};

// //sol-2 (a normal dfs code looks like this)
// function bfs(graph, start) {
//     let visited = new Set();
//     let queue = [start];
//     let result = [];

//     visited.add(start);

//     while (queue.length) {
//         let node = queue.shift(); // dequeue
//         result.push(node);

//         for (let neighbor of graph[node]) {
//             if (!visited.has(neighbor)) {
//                 visited.add(neighbor);
//                 queue.push(neighbor); // enqueue
//             }
//         }
//     }

//     return result;
// }

// // Example usage
// const graph = {
//     A: ['B', 'C'],
//     B: ['A', 'D'],
//     C: ['A', 'D'],
//     D: ['B', 'C']
// };

// console.log(bfs(graph, 'A')); // ['A', 'B', 'C', 'D']