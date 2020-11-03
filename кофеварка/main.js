let addUser = document.getElementsByClassName("add-user");
let modal = document.getElementsByClassName("modal")[0];
let popap = document.querySelector(".popap");

let clearInputs = () => {
  let inputs = document.getElementsByTagName("input");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
};

let closeModal = (e) => {
  e.stopPropagation();
  modal.style.display = "none";
  clearInputs();
}

addUser[0].onclick = function () {
  modal.style.display = "block";
};

let close = document.getElementsByClassName("close")[0];
close.addEventListener("click", function (e) {
  closeModal(e);
});

let close2 = document.getElementsByClassName("btn close")[0];
close2.addEventListener("click", function (e) {
  closeModal(e);
});

modal.addEventListener("click", function (e) {
  closeModal(e);
});

popap.addEventListener("click", function (e) {
  e.stopPropagation();
  e.preventDefault();
});








function CoffeeMachine(power) {
  this.waterAmount = 0;
  this.timeOut;

  var WATER_HEAT_CAPACITY = 4200;

  var self = this;

// прив
  function getBoilTime() {
    return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

// прив
  function onReady() {
    alert('Кофе готов!');
  }

  this.run = function() {
    self.timeOut = setTimeout(onReady, getBoilTime());
  };

  this.stop = function(){
    clearTimeout(self.timeOut)
    alert( 'Кофе не будет готов!');
  }

}

var coffeeMachine = new CoffeeMachine(50000);
coffeeMachine.waterAmount = 200;

coffeeMachine.run();
coffeeMachine.stop(); // кофе приготовлен не будет