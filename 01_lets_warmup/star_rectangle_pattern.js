// *****
// *****
// *****
// *****
// *****   

function star_rectangle_pattern(rows, cols) {

    for(let i=0; i<rows; i++){
        let pattern= " ";
        for(let j=0; j<cols; j++){
            pattern += "* ";//we will put all the pattern in this and print it once after 
            // inner loop completes and this will give us one line of stars eg: * * * * * 
        }
        console.log(pattern);
    }
}
console.log(star_rectangle_pattern(5, 5));