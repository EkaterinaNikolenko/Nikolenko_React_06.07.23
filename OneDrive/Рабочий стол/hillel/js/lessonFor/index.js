// let months = []; // numFirs

// for (let i = 0; i < 12; i++) {
//   months.push([]);
//   for (let j = 1; j <= 31; j++) {
//     if (i != 0 && i % 2 == 1 && j == 31) {
//       continue;
//     }
//     months[i].push(j);
//   }
// }

// for(let i = 0; i < months.length; i++){
//     for(let j = 0; j < months[i].length; j++){
//         // if(months[i][j] == undefined){
//         //     continue;
//         // }
//         console.log(months[i][j]);
//     }
// }

// for(let arr of months){
//     for(let item of arr){
//         console.log(item);
//     }
// }

// phi = 1.618;
// let arr = [];

// for(let i = 0; i < 6; i++){
//     arr.push([]);
//     for(let j = 5;)
// }

// function f(a){
    

// }

// function f(num){
//     let arr = Array(num);
//     arr[0] = 0;
//     arr[1] = 1;
//     for(let i = 2; i <= num; i++){
//         arr[i] = arr[i - 1] + arr[i - 2];
//     }
//     arr.splice(0, 2);
//     return arr;
// }

// let array = [];

// for(let i = 0; i < 5; i++){
//     array.push([]);
//     let arr = f(i + 2);
//     let arr2 = [];
//     for(let k = arr.length; k > 0; k--){
//         arr2[arr.length - k] = arr[k - 1];
//     }
//     array[i].push((arr + ',' + arr2).split(','));
// }

// console.log(array);

let women = [1, 6, 4, 5];

function customFilter(arr, callFn){
    let array = [];
    for(let item of arr){
        if(callFn(item)){
            array.push(item);
        }
    }
    return array;
}

console.log(customFilter(women, (item) => item % 2));