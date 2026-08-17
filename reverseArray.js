// arr = [0,1,2,3,4]
let arr = [0, 1, 2, 3, 4];

for(let i=0, j=arr.length-1; i<j ; i++ ,j--){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp ;
}

console.log(arr);