var lemonadeChange = function(bills) {
    
    let count5= 0;
    let count10= 0;

    for(let bill of bills){

        if(bill==5){
            count5++;
        }
        else if(bill==10){
            if(count5==0) return false;//can not give change
            count5--;
            count10++;
        }
        else{//for bill 20 we can give change as -> 10 +5 or 5+5+5

            if(count5>0 && count10>0){//for 10+5
                count5--;
                count10--;
            }
            else if(count5>=3){//for 5+5+5
                count5 -=3;
            }
            else{
                return false;//can not give change
            }
        }
    }
    return true;
};
console.log(lemonadeChange([5,5,5,10,20]));//true
console.log(lemonadeChange([5,5,10,10,20]));//false