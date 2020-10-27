
// /* Задание 1 */
const timer = function(start, stop){
  let i = start;
  const t = setInterval(function(){
if (i > stop){
  clearInterval(t)
  console.log("Прошла 1 минута")
  return
}
console.log(i)
++i
  }, 1000)
}
timer(1,59)




/* Задание 2 */
const sayArray = function () {
  let array = [];

  let n = Math.round(Math.random() * 10);
  for (; array.length < n; ) {
    let j = Math.round(Math.random() * 10);
    array.push(j);
  }

  let addAnyElement = "";
  addAnyElement = prompt(`Введите элемент массива`);
  // addAnyElement = Number(addAnyElement);
  console.log("my element equals: ", addAnyElement)
  array.push(addAnyElement);

  if(typeof addAnyElement === "string"){
  array.pop();
  }

  console.log(array);
  let summ = 0;
  for (let i = 0; i < array.length; i++) {
    summ += array[i];
  }
  console.log("summ", summ)
  console.log(typeof summ)
};

sayArray();





// /* Задание 3 */
const Counter = function (array) {
  this.array = array;

  this.getArrayLength = function () {
    console.log(this.array.length);
  };
  this.getArrayString = function () {
    for (let i = 0; i < this.array.length; i++) {
      this.array[i] = this.array[i].length;
    }
    console.log(
      "Массив состоящий из колличества символов каждой строки: ",
      this.array
    );
  };
  this.getAnyArray = function () {
    console.log(this.array = this.array.join(", "));
    console.log(typeof this.array)
  }
};

const counter = new Counter([5, 8, 7, 5, 8]);
counter.getArrayLength();


const arrayString = new Counter(["пирамида", ".г", "паралеллограмм"]);
arrayString.getArrayString();

const anyArr  = new Counter(["sun", "seea", "yes"]);
anyArr.getAnyArray();