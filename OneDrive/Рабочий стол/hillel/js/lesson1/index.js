// let arr = [1,2,3];
// let str = '';
// arr.forEach(element => {
//     if(arr.at(-1) === element){
//         str += element;
//     }
//     else{
//         str += element + ',';
//     }
// })
// console.log(str);

let arr = ['a',1,3,'l'];
let num = [];
let str = [];

arr.forEach(element => {
    if(typeof element === 'number'){
        num.push(element);
    }
    else{
        str.push(element);
    }
})

console.log(num);
console.log(str);
