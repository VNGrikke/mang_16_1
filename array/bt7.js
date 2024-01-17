function findSubarrayWithSum(arr, sum) {
for(let i = 0 ; i < arr.length; i++){
    sum = arr[i];
    let sub_arr = [arr[i]];
    for( let j = i+1; j < arr.length; j++){
        sum += arr[j];
        sub_arr.push(arr[j]);
        if(sum === x){
            return sub_arr;
            } 
        }
    }
    return null;
}

let arr = [1,5,6,3,2,1,1,5,6,7];
let x = +prompt('nhập x');
let sum = 0;
var result = findSubarrayWithSum(arr, x);
if(result){
    console.log(`mảng con có tổng bằng ${x} là ${result}`);
}else{
    console.log(`khongo tìm thấy mảng`);
}
