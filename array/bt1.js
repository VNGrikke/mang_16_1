let numberList1 = [1,2,3,4,5,6,7,8,9];
let numberList2 = ['abc',null,undefined,true,NaN];
for(let number of numberList1 ){
    console.log(number);
}
let i = 0;
for(let number of numberList2 ){
    if(number = true){
        continue;
    }else if(number = false){
        continue;
    }else if(number = null){
        continue;
    }else if(isNaN(number)){
        continue;
    }else if(number%1==0){
        console.log(number);
        i++;
    }
}
if(i===0){
    console.log("không có số nguyên");
}