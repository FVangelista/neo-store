import { createNavbar, createFooter } from "../../layout/layout.js";
import createMainCart from "../../components/createMainCart.js";
import { gEl } from "../../utils/helpers.js";

const bodyEl = gEl("body");

window.addEventListener("DOMContentLoaded", createNavbar);
window.addEventListener("DOMContentLoaded", createMainCart(bodyEl));
window.addEventListener("DOMContentLoaded", createFooter);
