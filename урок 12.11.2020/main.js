const goods = [
  {
    name: "car 1",
    prise: 100,
    id: 0,
  },
  {
    name: "car 2",
    prise: 200,
    id: 1,
  },
  {
    name: "car 3",
    prise: 300,
    id: 2,
  },
];

const goodsInStorege = JSON.parse(localStorage.getItem("goods"));
const goodsInCart = goodsInStorege ? goodsInStorege : [];

const store = document.querySelector(".root");
const cart = document.querySelector(".cart");

const updateStorage = (goodsInCart) => {
  localStorage.setItem("goods", JSON.stringify(goodsInCart)); /*добавляем в локалсторэдж ключ и значение(значение -  это массив)*/
};

const deletButtonHandler = () => {
  const clearButtons = document.querySelectorAll(".button-clear");
  clearButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const goodId = button.getAttribute("data-product-id");
      removeFromCart(goodId);
    });
  });
};

const addItemsFromStorage = () => {
  goodsInCart.forEach((item) => {
    const goodInCart = document.createElement("div");
    goodInCart.innerText = `Марка ${item.name}, цена ${item.prise}`;
    cart.append(goodInCart);

    const clearProduct = document.createElement("button");
    clearProduct.innerText = "Удалить товар из корзины";
    cart.append(clearProduct);
    clearProduct.className = "button-clear";
    clearProduct.dataset.productId = item.id;
  });
  deletButtonHandler();
};

const removeFromCart = (goodId) => {
  cart.innerHTML = "";
  const index = goodsInCart.findIndex((item) => {
    return item.id === Number(goodId);
  });
  goodsInCart.splice(index, 1);
  addItemsFromStorage();
  updateStorage(goodsInCart);
};

const addToCart = (divElem, goodId) => {
  divElem.addEventListener("click", function () {
    cart.innerHTML = ""; /* чистим cart */
    if (!goodsInCart.some((good) => good.id === goodId)) {
      goodsInCart.push(goods[goodId]); /* если id совпали, мы ничего не делаем*/
    }
    updateStorage(goodsInCart);
    addItemsFromStorage();
  });
};

goods.forEach((good) => {
  const divElem = document.createElement("div"); /*создает новый див */
  divElem.style.cursor = "pointer";
  divElem.innerText = `Марка ${good.name}, цена ${good.prise}`; /* записваетзначения в див */
  store.append(divElem); /*сохраняем новый див в сужествующий в ДОМе див */
  addToCart(divElem, good.id); /*передаем в функуию див и индекс*/
});

addItemsFromStorage();

const clearStorage = document.querySelector(".clears-storage");
clearStorage.addEventListener("click", () => {
  localStorage.clear();
  cart.innerHTML = "";
});

