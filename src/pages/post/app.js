import { createNavbar, createFooter } from "../../layout/layout.js";
import createMainPost from "../../components/createMainPost.js";
import { gEl } from "../../utils/helpers.js";

const bodyEl = gEl("body");

window.addEventListener("DOMContentLoaded", createNavbar);
window.addEventListener("DOMContentLoaded", createMainPost(bodyEl));
window.addEventListener("DOMContentLoaded", createFooter);
