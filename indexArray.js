const str = prompt("Введите слово палиндром");
const arr = str.split("");

console.log("arr", arr);

let arrReverse = arr.reverse();
let arrStr = arrReverse.join('');

if (str === arrStr){
    alert("Вы молодец! Введенное Вами слово " + str + " является палиндромом.")
}
else {
    alert("Слово " + str + " не является словом палиндромом.")
}




const array = [];

let n = Math.round(Math.random() * 10);
array.push(n);


for(; array.length < 7;){
    let flag = true;
    let j = Math.round(Math.random() * 10);
    for(let i = 0; i < array.length; i++){
        if (j === array[i]){
            flag = false;
        }
    }
    if (flag){
        array.push(j);
    }
}

console.log("array", array);

console.log("arraySort", array.sort(function(a, b){
    return a - b;
}));