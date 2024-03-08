let arr = [];
arr.push('1', '2', '3')
if(arr[0] > arr[1] && arr[0] > arr[3]) {
    max = arr[0]; 
}  else if(arr[1] > arr[0] && arr[1] > arr[2]) {
    max = arr[1]; 
}

(arr[0] > arr[1] && arr[0] > arr[3])? max = arr[0] : ((arr[1] > arr[0] && arr[1] > arr[2])? max = arr[1] : max = arr[2]);

if(arr[0] > arr[1] && arr[0] > arr[3]) {
    max = arr[0]; 
}  else  {
    max = arr[1]; 
}

arr[0] > arr[1] && arr[0] > arr[3]? max = arr[0] : ((arr[1] > arr[0] && arr[1] > arr[2])? max = arr[1] : max = arr[2]);

let arr2 = [];
arr2.push(arr.length);
arr2.push(arr.splice(0, 2))