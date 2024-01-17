let a = +prompt('a');
let b = +prompt('b');
let numberList = new Array();
if(a>b){
    for(let i = 0; i <= a; i++){
        if(i%b===0){
            numberList.push(i);
        }
    }
}else if(b>a){
    for(let i = 0; i <= b; i++){
        if(i%a===0){
            numberList.push(i);
        }
    }
}else{
    numberList.push(0);
    numberList.push(a);
}

for (const number of numberList) {
    console.log(number);
}