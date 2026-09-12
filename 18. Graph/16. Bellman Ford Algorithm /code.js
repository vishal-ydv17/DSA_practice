//LOGIC- note while dry run we can start from any node and we have to relax all the edges one by one
//suppose if we had started from node 0 and made 1st relaxation table for 1st iteraion 
//but after V-1 times we will have the same shortest distance from source to all other nodes in the graph

//now this only works for graph with no negative weight cycle because if we have a negative weight cycle then 
//we can keep on relaxing the edges and we will never reach the shortest distance from source to all other nodes in the graph
//ans also does not work for cyclic graph with negative weight cycle because if we have a negative weight cycle then we can keep 
//on relaxing the edges and we will never reach the shortest distance from source to all other nodes in the graph
//O(V * E)
function bellmanFord(graph, src) {

    let dist = new Array(V).fill(Infinity);
    dist[src] = 0;

    //lets relax all edges V-1 times
    for(let i=0 ; i<V-1; i++){
        for(let [u, v, w] of graph){
            
            if(dist[u] != Infinity && dist[u] + w < dist[v]){
                dist[v] = dist[u] + w;
            }
        }
    }//now bellman ford algorithm is done and we have the shortest distance from source to 
    //all other nodes in dist array

    // //now lets optimize it 
    // for(let i=0 ; i<V-1; i++){
    //     let updated = false;
    //     for(let [u, v, w] of graph){
            
    //         if(dist[u] != Infinity && dist[u] + w < dist[v]){
    //             dist[v] = dist[u] + w;
    //             updated = true;
    //         }
    //     }
    //     if(!updated) break; //if no updates were made in this iteration we can stop early
    // }

    //we can also check for NEGATIVE weight cycle in the graph 
    // by doing one more relaxation like 1 more than V-1 times and if 
    // we can still relax any edge then it means there is a negative weight cycle in the graph
    
    //lets check for negative weight cycle
    for(let [u, v, w] of graph){
        if(dist[u] != Infinity && dist[u] + w < dist[v]){
            console.log("hello graph contains negative weight cycle");
            return;
        }
    }

    return dist;
}

//test case for aacyclic graph with negative weight edges
const edges = [
    //[u, v, w] where u is the source node, v is the destination node and w is the weight of the edge
    [0, 1, 6],
    [0, 2, 5],
    [0, 3, 5],
    [1, 4, -1],
    [2, 1, -2],
    [2, 4, 1],
    [3, 2, -2],
    [3, 5, -1],
    [4, 6, 3],
    [5, 6, 3]
];


// //test case for cyclic graph with negative weight cycle
// const edges =[
//     [0, 1, 4],
//     [1, 2, -1],
//     [2, 3, -2],
//     [3, 1, 0]
// ]


let V = 7; // number of vertices in the graph
console.log(bellmanFord(edges, 0));
//output- [ 0, 1, 3, 5, 0, 4, 3 ]

//output for cyclic graph with negative weight cycle- 
// hello graph contains negative weight cycle