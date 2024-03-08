function power (num, pow){
    if(pow == 1){
        return num;
    } else{
        return num * power(num, pow - 1);
    }
    
}

console.log(power(2, 3));