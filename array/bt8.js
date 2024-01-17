let arr = [1,5,6,3,2,1,1,5,6,7];
let arr2 = new Array();
for(let i = 0; i < arr.length; i++){
    let count = 1;
        for(let j = i+1; j<arr.length; j++){
            if(arr[i] === arr[j]){
                count++;
            }
        }
    
    if(count > 1){
        let found = false;
        for (let value of arr2) {
            if (arr[i]=== value){
                found = true;
                break;         
            }
        }
        if(!found){
            arr2.push(arr[i]);
        }
    }
}
console.log(arr2);