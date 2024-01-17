let numberList = [-1,-45,-2,0,1,5,7,4,4,3,7,1];
let x = +prompt('x');
let i = 0;
for(let index in numberList ){
    if(x === numberList[index]){
        i++;
    }

}
console.log(i);