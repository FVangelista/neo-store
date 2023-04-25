import { cEl, gEl } from "../utils/helpers.js";

const bodyEl = gEl("body");

export function createNavbar() {
  const nav = cEl("nav");
  nav.classList.add("nav");
  const ul = cEl("ul");
  ul.classList.add("nav_list");
  const logo = cEl("h2");
  logo.classList.add("nav_logo");

  logo.textContent = ".vanilla";

  const cartListLength =
    JSON.parse(localStorage.getItem("cartList")) === null
      ? 0
      : JSON.parse(localStorage.getItem("cartList")).length;

  const menuItems = ["Home", "Post", `Cart (${cartListLength})`];
  menuItems.forEach((item) => {
    const li = cEl("li");
    const a = cEl("a");

    a.classList.add("nav_list-item");
    a.textContent = item;

    ul.appendChild(li);
    li.appendChild(a);
  });
  ul.children[0].firstChild.href = "/";
  ul.children[1].firstChild.href = "/post.html";
  ul.children[2].firstChild.href = "/cart.html";

  bodyEl.appendChild(nav);
  nav.appendChild(logo);
  nav.appendChild(ul);
}

export function createFooter() {
  const footer = cEl("section");
  footer.classList.add("footer");
  const ul = cEl("ul");
  ul.classList.add("nav_list");
  const logo = cEl("span");
  logo.classList.add("footer-logo");

  logo.innerHTML = "Vanilla.js &copy; by filippo";

  const cartListLength =
    JSON.parse(localStorage.getItem("cartList")) === null
      ? 0
      : JSON.parse(localStorage.getItem("cartList")).length;

  const menuItems = ["Home", "Post", `Cart (${cartListLength})`];
  menuItems.forEach((item) => {
    const li = cEl("li");
    const a = cEl("a");

    a.classList.add("nav_list-item");
    a.textContent = item;

    ul.appendChild(li);
    li.appendChild(a);
  });
  ul.children[0].firstChild.href = "/";
  ul.children[1].firstChild.href = "/post.html";
  ul.children[2].firstChild.href = "/cart.html";

  bodyEl.appendChild(footer);
  footer.appendChild(ul);
  footer.appendChild(logo);
}
