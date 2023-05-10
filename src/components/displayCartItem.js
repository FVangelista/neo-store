import { cEl, gEl, calcTotal } from "../utils/helpers.js";

let localData = JSON.parse(localStorage.getItem("cartList"));

export const displayCartItem = (cartWrapper, data, total) => {
  let { id, title, price, qty } = data;

  const cartItem = cEl("div");
  cartItem.classList.add("cartItem");
  cartItem.id = id;

  const cartImg = cEl("img");
  cartImg.classList.add("cartImg");
  const cartTitle = cEl("h3");
  cartTitle.classList.add("cartTitle");
  const cartPrice = cEl("span");
  cartPrice.classList.add("cartPrice");
  const cartQty = cEl("span");
  cartPrice.classList.add("cartQty");

  const btnsWrapper = cEl("div");
  btnsWrapper.classList.add("btnsWrapper");
  const btnInc = cEl("button");
  btnInc.classList.add("btnCart");
  btnInc.classList.add("btnInc");
  const btnDec = cEl("button");
  btnDec.classList.add("btnCart");
  btnDec.classList.add("btnDec");
  const btnRem = cEl("button");
  btnRem.classList.add("btnCart");
  btnRem.classList.add("btnRem");

  btnInc.textContent = "+";
  btnDec.textContent = "-";
  btnRem.textContent = "x";

  btnRem.addEventListener("click", () => {
    localData = JSON.parse(localStorage.getItem("cartList"));
    const filteredData = localData.filter((item) => item.id !== id);

    localStorage.setItem("cartList", JSON.stringify(filteredData));
    cartItem.remove();

    const cartLink = document.querySelectorAll(".nav_list-item")[2];
    cartLink.textContent = `Cart (${filteredData.length})`;
    total.textContent = `$ ${calcTotal(filteredData)}.00`;
  });

  btnInc.addEventListener("click", () => {
    localData = JSON.parse(localStorage.getItem("cartList"));

    localData.filter((item) => {
      if (item.id === id) {
        item.qty++;
        item.totalPrice += price;
        cartPrice.textContent = `$ ${item.totalPrice}`;
        cartQty.textContent = `x ${item.qty}`;
        total.textContent = `$ ${calcTotal(localData)}.00`;
      }
    });

    localStorage.setItem("cartList", JSON.stringify(localData));
  });

  btnDec.addEventListener("click", () => {
    localData = JSON.parse(localStorage.getItem("cartList"));

    localData.filter((item, index) => {
      if (item.id === id) {
        item.qty--;
        item.totalPrice -= price;
        cartPrice.textContent = `$ ${item.totalPrice}`;
        cartQty.textContent = `x ${item.qty}`;
        total.textContent = `$ ${calcTotal(localData)}.00`;
      }

      if (item.qty === 0) {
        localData.splice(index, 1);
        cartItem.remove();
        const cartLink = gEl(".nav_list-item");
        cartLink.textContent = `cart (${localData.length})`;
        return;
      }
    });

    localStorage.setItem("cartList", JSON.stringify(localData));
  });

  cartQty.textContent = `x ${qty}`;

  cartPrice.textContent = `$ ${price}`;

  cartTitle.textContent = title;

  cartImg.src = `https://picsum.photos/id/${Math.round(
    Math.random() * 50
  )}/200/300`;

  cartWrapper.appendChild(cartItem);
  cartItem.appendChild(cartImg);
  cartItem.appendChild(cartTitle);
  cartItem.appendChild(cartPrice);
  cartItem.appendChild(cartQty);
  cartItem.appendChild(btnsWrapper);
  btnsWrapper.appendChild(btnInc);
  btnsWrapper.appendChild(btnDec);
  btnsWrapper.appendChild(btnRem);
};
