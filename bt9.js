function bubbleSort(arr) {
    let len = arr.length;
    let swap;
    do {
        swap = false;
        for (let i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                
                swap = true;
            }
        }
    } while (swap);
    
    return arr;
}
let arr1 = [1,8,2,3,7];
let newarr1 = bubbleSort(arr1);
console.log(newarr1);
for (let index in newarr1) {
    let value = newarr1[index] + 1;
    if (newarr1[0]>1) {
        value = 1;
        console.log(value);
        break;
    }else if(value < newarr1[index + 1]){
        console.log(value);
        break;
    }
}