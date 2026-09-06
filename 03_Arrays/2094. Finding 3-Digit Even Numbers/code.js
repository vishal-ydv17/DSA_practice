//1-LOGIC-use the set to manage duplicate and avoide leading 0, same digits and use the formula to acess the digits like 
// eg 312: 3 × 100 = 300
//         1 × 10  = 10
//         2       = 2       =300+10+12=312

var findEvenNumbers = function(digits) {
    
    let result= new Set();//to avoide duplicate as no duplicate we need in answer

    for(let i=0; i<digits.length; i++){

        if(digits[i]==0) continue;//first digit cannot be 0 (no leading zero)

        for(let j=0; j<digits.length; j++){

            if(i==j) continue;//make sure every choosen digit comes from diff index

            for(let k=0;k<digits.length;k++){

                if(k==i || k==j) continue;//make sure every choosen digit comes from diff index
                
                if(digits[k] % 2 !=0) continue;//last digit must be even

                let num= digits[i]*100 + digits[j]*10 + digits[k];

                result.add(num);

            }
        }
    }
    let arr= [...result];
    arr.sort((a,b)=>a-b);

    return arr;
};

// //2-LOGIC-in this we will not make 3 number digit but only check the digit from 100 to 998
// //count the freq of digit and utilize the original freq count to find the correct digit
// var findEvenNumbers = function(digits) {
    
//     let freq= new Array(10).fill(0);

//     for(let digit of digits){

//         freq[digit]= (freq[digit] || 0) + 1;//count freq of digits
//     }

//     let ans=[];

//     for(let num=100; num<998; num +=2){

//         let count= [...freq];//each iteration take original freq array

//         //lets break the number into the its digits
//         let a= Math.floor(num/100);
//         let b= Math.floor((num%100)/10);
//         let c= Math.floor(num%10);

//         //lets verify the digit if it is valid
//         if(count[a]>0){
//             count[a]--;
//         }
//         else continue;

//         if(count[b]>0){
//             count[b]--;
//         }
//         else continue;

//         if(count[c]>0){
//             count[c]--;
//         }
//         else continue;

//         ans.push(num);
//     }

//     return ans;

// }