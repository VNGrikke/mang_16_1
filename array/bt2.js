let list = [1,2,3,'a','b','c',null,undefined,true];
let x = prompt("nhập x")
let i = 0;
if (typeof x === "string" ) {
    x = x.toLowerCase();
    if(x === "null"){
        x = null;
    }else if(x === "true"){
        x = true;
    }else if(x === "undefined"){
        x = undefined;
    }else if(x === "false"){
        x = false;
    }
}
for(let index in list ){
    if(x == list[index]){
        console.log(`phần tử ${x} ở vị trí ${index}`);
        i++
    }
}
if(i===0){
    console.log("không tồn tại");
}
