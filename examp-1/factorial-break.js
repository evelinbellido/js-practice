let num = 10;
let result = num;


while(num > 2){
    num--;
    result *= num;
    console.log(result)
    if (num == 0 || num == 1) {
        break
    }
}