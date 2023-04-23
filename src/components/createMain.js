import GET from "../utils/api.js";
import { cEl, gEl, removeBefore } from "../utils/helpers.js";

const currentItems = JSON.parse(localStorage.getItem("cartList"));
const cartList = currentItems ? currentItems : [];

export default function createMain(bodyEl) {
  const mainSection = cEl("section");
  mainSection.classList.add("mainSection");
  const form = cEl("form");
  form.classList.add("form");
  const searchInput = cEl("input");
  searchInput.classList.add("searchInput");
  searchInput.type = "text";
  searchInput.placeholder = "Search";
  const mainContent = cEl("div");
  mainContent.classList.add("mainContent");

  bodyEl.appendChild(mainSection);
  form.appendChild(searchInput);
  mainSection.appendChild(form);
  mainSection.appendChild(mainContent);

  GET(20).then((data) => data.map((item) => displayCards(item)));

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    removeBefore(".card");

    GET(20).then((data) =>
      data.filter((item) => {
        if (item.title.toLowerCase().includes(searchInput.value)) {
          displayCards(item);
        }
      })
    );
  });

  const displayCards = (item) => {
    const { id, title, description, price, images } = item;

    const card = cEl("div");
    card.classList.add("card");
    const imgsWrapper = cEl("div");
    imgsWrapper.classList.add("imgsWrapper");
    const infoWrapper = cEl("div");
    infoWrapper.classList.add("infoWrapper");
    const infoTitle = cEl("h3");
    infoTitle.classList.add("infoTitle");
    const infoPrice = cEl("span");
    infoPrice.classList.add("infoPrice");
    const btnsWrapper = cEl("div");
    btnsWrapper.classList.add("btnsWrapper");
    const leftBtn = cEl("span");
    leftBtn.classList.add("cardBtn");
    const rightBtn = cEl("span");
    rightBtn.classList.add("cardBtn");

    leftBtn.textContent = "<";
    rightBtn.textContent = ">";

    leftBtn.addEventListener("click", () => {
      imgsWrapper.style.transform = "translateX(-500px)";

      if (imgsWrapper.classList.contains("target")) {
        imgsWrapper.style.transform = "translateX(0px)";
        imgsWrapper.classList.remove("target");

        return;
      } else if (imgsWrapper.classList.contains("firstTarget")) {
        imgsWrapper.style.transform = "translateX(-250px)";
        imgsWrapper.classList.remove("firstTarget");
        imgsWrapper.classList.add("target");
        return;
      }

      imgsWrapper.classList.add("firstTarget");
    });

    rightBtn.addEventListener("click", () => {
      console.log(imgsWrapper);
      imgsWrapper.style.transform = "translateX(-250px)";

      if (imgsWrapper.classList.contains("target")) {
        imgsWrapper.style.transform = "translateX(-500px)";
        imgsWrapper.classList.remove("target");
        imgsWrapper.classList.add("firstTarget");

        return;
      } else if (imgsWrapper.classList.contains("firstTarget")) {
        imgsWrapper.style.transform = "translateX(0)";
        imgsWrapper.classList.remove("firstTarget");

        return;
      }

      imgsWrapper.classList.add("target");
    });

    const btn = cEl("button");
    btn.classList.add("btn");

    btn.textContent = "add to cart";

    btn.addEventListener("click", () => {
      const cartSchema = {
        id: item.id,
        img: item.images[0],
        title: item.title,
        price: item.price,
        qty: 1,
        totalPrice: item.price,
      };

      const cartListFiltering = cartList.filter((element) => {
        if (cartSchema.id === element.id) {
          element.qty++;
          element.totalPrice = element.totalPrice + price;
          return element;
        }
      });

      if (cartListFiltering.length === 0) {
        cartList.push(cartSchema);
      }

      let count = 0;
      cartList.map((item) => {
        count = count + item.qty;
      });

      window.localStorage.setItem("cartList", JSON.stringify(cartList));
      console.log(cartListFiltering);
      const cartLink = gEl(".nav_list-item");
      cartLink.textContent = `cart (${count})`;
    });

    infoPrice.textContent = `$ ${price}`;

    infoTitle.textContent = title.split(" ").splice(0, 2).join(" ");

    images.map((image) => {
      const imgCard = cEl("img");
      imgCard.classList.add("imgCard");

      imgCard.src = image;

      imgsWrapper.appendChild(imgCard);
    });

    mainContent.appendChild(card);
    card.appendChild(imgsWrapper);
    card.appendChild(infoWrapper);
    card.appendChild(btnsWrapper);
    btnsWrapper.appendChild(leftBtn);
    btnsWrapper.appendChild(rightBtn);
    infoWrapper.appendChild(infoTitle);
    infoWrapper.appendChild(infoPrice);
    infoWrapper.appendChild(btn);
  };
}
