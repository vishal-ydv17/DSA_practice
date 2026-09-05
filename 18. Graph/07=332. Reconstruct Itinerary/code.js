/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
// Note - this Q is based on Hierholzers algorithm (algorithm to find an Eulerian path)
// LOGIC:
// - Initially it looks like we can use greedy/backtracking but we cant because if we 
//   make a local greedy choice then after moving from that node we cant come back 
//   (no ticket to return). If we had chosen a different path than the greedy one, we 
//   may have missed exploring other destinations reachable only through that ticket
// - The correct approach is: explore GREEDILY (lexically smallest neighbor first) but 
//   only add a node to the final path AFTER all its outgoing edges (tickets) are used up
//   This way "dead-end" nodes (nodes that run out of tickets) get finalized first
//   and get naturally placed at the correct position when we reverse the path at the end
// step-1: sort the adjacency list so neighbors are visited in lexical order 
//         (required since itinerary must be lexically smallest when multiple valid ones exist)
// step-2: while exploring, keep REMOVING edges from the adjacency list (shift()) — 
//         this acts as marking an edge "used" since each ticket can only be used once
// Note: we do NOT use a visited-map like normal DFS because we ARE allowed to revisit 
//       the same city multiple times (just not use the same ticket/edge twice)
var findItinerary = function(tickets) {
    
    //step-1 lets create the graph map or adj list of all nodes
    //key = departure city, value = list of destination cities reachable from it
    let graphMap = {};//we can use map also i have used object
    for(let [from, to] of tickets){

        if(!graphMap[from]) graphMap[from] = [];
        graphMap[from].push(to);
    }

    //step-2 sort each nodes destination list lexically coz this ensures that when we greedily pick the first neighbor and its always the smallest one alphabetically(needed for correct itinerary)
    for(let node in graphMap){
        graphMap[node].sort();
    }

    let path=[];//will store the final itinerary
    var dfs=(curr)=>{
        
        //path.push(curr);
        //Note- we do not push before eploreing all tickets FROM curr before finalizing its position in the path
        //1st make the whole tree then push the path
        //so this path will come in reverse order as we are pushing it from the leaf of tree
        //so later we reverse the path

        let destination= graphMap[curr] || [];//get the list of unvisited destinations from curr (edges not yet used)
        while(destination.length > 0){//keep exploring as long as there are unused tickets/edges from curr
            let neighbor = graphMap[curr].shift();//marks that edge as used(coz it is now removed from graphMap)
            dfs(neighbor);
        }
        //once curr has NO more outgoing tickets left its a dead end so
        //we finalize it by pushing it into the path
        path.push(curr);//push after the whole tree is complete
    }
    dfs("JFK");//we hard code this as it always start from "JFK" given in Q

    return path.reverse();
};