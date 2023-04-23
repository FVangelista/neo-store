import { cEl, calcTotal } from "../utils/helpers.js";
import { displayCartItem } from "./displayCartItem.js";

let localData = JSON.parse(localStorage.getItem("cartList"));

export default function createMainCart(bodyEl) {
  const mainSection = cEl("section");
  mainSection.classList.add("mainSection");
  const cartWrapper = cEl("div");
  cartWrapper.classList.add("cartWrapper");
  const total = cEl("h3");
  total.classList.add("total");

  total.textContent = `$ ${calcTotal(localData)}.00`;

  localData?.map((item) => {
    displayCartItem(cartWrapper, item, total);
  });

  bodyEl.appendChild(mainSection);
  mainSection.appendChild(cartWrapper);
  mainSection.appendChild(total);
}
