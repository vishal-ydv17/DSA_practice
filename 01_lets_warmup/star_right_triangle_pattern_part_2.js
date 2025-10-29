//    *
//   **
//  ***
// ****
//*****

function star_right_triangle_pattern_part_2(n) {
    for(let i=0;i<n;i++){
        let pattern= " ";
        for(let j=0;j<n-1-i;j++){
            pattern += " ";// for spaces
        }
        for(let k=0;k<=i;k++){
            pattern +="*";// for stars //add extra space to make it like a pyramid like structure
        }
        console.log(pattern);
    }
}
star_right_triangle_pattern_part_2(5);

//better solution using repeat method

// function star_right_triangle_pattern_part_2(n) { 
//     for(let i = 0; i < n; i++) {
//         const spaces = " ".repeat(n - i - 1);
//         const stars = "*".repeat(i + 1);
//         console.log(spaces + stars);
//     }
// }

// star_right_triangle_pattern_part_2(5);