let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for(let i in arr){
    if(arr[i]%2==1){
        arr.splice(i, 1);
    }
}
console.log(arr);