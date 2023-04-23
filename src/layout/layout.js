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

  const menuItems = [`cart (${cartListLength})`, "home", "post"];
  menuItems.forEach((item) => {
    const li = cEl("li");
    const a = cEl("a");

    a.classList.add("nav_list-item");
    a.textContent = item;

    ul.appendChild(li);
    li.appendChild(a);
  });
  ul.children[0].firstChild.href = "/neo-store/cart.html";
  ul.children[1].firstChild.href = "/neo-store/";
  ul.children[2].firstChild.href = "/neo-store/post.html";

  bodyEl.appendChild(nav);
  nav.appendChild(logo);
  nav.appendChild(ul);
}

export function createFooter() {
  const footer = cEl("section");
  footer.classList.add("footer");
  const ul = cEl("ul");
  ul.classList.add("nav_list");
  const logo = cEl("h4");
  logo.classList.add("footer-logo");

  logo.innerHTML = "&copy; vanilla .js";

  const menuItems = ["cart", "home", "post"];
  menuItems.forEach((item) => {
    const li = cEl("li");
    const a = cEl("a");

    a.classList.add("nav_list-item");
    a.textContent = item;

    ul.appendChild(li);
    li.appendChild(a);
  });
  ul.children[0].firstChild.href = "/neo-store/cart.html";
  ul.children[1].firstChild.href = "/neo-store/";
  ul.children[2].firstChild.href = "/neo-store/post.html";

  bodyEl.appendChild(footer);
  footer.appendChild(ul);
  footer.appendChild(logo);
}
