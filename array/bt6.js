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

let numberList = [1,4,7,9,0,-1,-6,-7,-33,3,11,34];
console.log("mảng trước sắp xếp:", numberList);
var sort = bubbleSort(numberList);
console.log("mảng sau sắp xếp:", sort);
