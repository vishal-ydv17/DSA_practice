//LOGIC-we need to serve the when student and sanwiches matches and then remove both of them 
//now logic is count 0 and 1 sanwiches needed then iterate on sanwiches to find if they match then reduce the count
//after complete sandwiches iteration return th sum of 0 and 1 count
var countStudents = function(students, sandwiches) {

    let count0=0;
    let count1=0;
    //count how much 0 and 1 students are there
    for(let student of students){

        if(student==0) count0++;
        else count1++;
    }

    for(let sandwich of sandwiches){//let reduce count if sanwiches and student match

        if(sandwich==0 && count0>0) count0--;//serve student who wants 0 

        else if(sandwich==1 && count1>0) count1--;//serve studet whoe wants 1

        else break;//if no student wants the sandwiches
    }

    return count0 + count1;
}
console.log(countStudents([1,1,0,0], [0,1,0,1])); //0
console.log(countStudents([1,1,1,0,0,1], [0,0,0,1,1,1])); //3   

// LOGIC- solve it by using queue methods like shift and use rotation to avoide infinite loop
// var countStudents = function(students, sandwiches) {
    
//     let rotation=0;

//     while(students.length>0 && sandwiches.length>0){

//         if(sandwiches[0]==students[0]){//match student takes sandwich

//             //remove top when student and sadwiches match
//             sandwiches.shift();
//             students.shift();
//             rotation=0;//reset when someone eats sandwiches
//         }
//         else{//if not match then rotate the student

//             let temp=students[0];

//             students.shift();
//             students.push(temp);
            
//             rotation++;

//             //now check for deadlock situation when no students wants to eat sanwiches
//             if(rotation==students.length){
//                 return students.length;
//             }
//         }
//     }

//     return sandwiches.length;
// };