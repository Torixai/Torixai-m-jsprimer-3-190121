const numbers = [0,4,6,1,3,5];
let isEvenIncluded = false;

const ind = numbers.indexOf(3);
console.log(ind);

for (let i = 0; i <numbers.length; i++) {
    const number = numbers[i];
    if (number % 2 === 0) {
        isEvenIncluded = true;
        break;
    }
}

console.log(isEvenIncluded);

(() => {
    for (let i = 0; i< numbers.length; i++){
        if (i % 15 === 0){
            console.log("Fizz Buzz!");
        } else if(i % 3 === 0) {
            console.log("Fizz!");
        } else if (i%5===0) {
            console.log("Buzz!");
        } else {
            console.log(i);
        }
    }
})();

function isEven(num) {
    return num % 2 === 0;
}

console.log(numbers.some(isEven));

function filterEven(num) {
    const results = [];
    for (let i = 0; i < num.length; i ++){
        const checknum = num[i];
        if(!isEven(checknum)){
            continue; // 次ループへ移動
        } 
        results.push(checknum); //上記の条件に引っかからなかったやつの処理

    }
    return results;
}
console.log(filterEven(numbers));

filtered = numbers.filter(isEven); // filterをかける、trueのもののみ抽出
console.log(filtered);