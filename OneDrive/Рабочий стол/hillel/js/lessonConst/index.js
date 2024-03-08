function Product(title, price) {
    this.isHave = true;
    this.title = title;
    this.price = price;
    this.sell = () =>{
        this.isHave = false;
    }
    this.addTax= () => {
        return this.price * 1.1;
    }
}

let arr = [];

for(let i = 0; i < 10; i++){
    arr.push(new Product('product' + i, i));
}

// for(let i = 0; i < arr.length; i++){
//     arr[i].price *= 0.1; 
//     arr.at(i).price *= 0.1; 
// }

// for(let item of arr){
//     item.price *= 0.1;
// }

arr.forEach((item) => item.price *= 0.1);

arr.forEach(elem => {
    if(elem.price % 2 === 0){
        elem.sell();
    }
});

let arr2 = [];

for(let i = arr.length - 1; i > 0; i--){
    arr2.push(arr[i]);
}

arr.sort((a, b) => {
    if(a.price > b.price){
        return -1;
    } else if(a.price < b.price){
        return 1;
    }
    return 0;
})

console.log(arr2, arr);


