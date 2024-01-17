let arr1 = [1,2,3,4,5];
let arr2 = [-3,-1,2,1,5];
let arr3 = [1,5,2,7];
let arr4 = new Array();
for (let index1 in arr1) {
    for (let index2 in arr2) {
        if (arr1[index1]===arr2[index2]) {
            for (let index3 in arr3) {
                if (arr1[index1]===arr3[index3]) {
                    arr4.push(arr1[index1]);
                }
            }
        }
    }
} 
console.log(arr4);