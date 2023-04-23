import { gEl } from "../../utils/helpers.js";
import { createNavbar, createFooter } from "../../layout/layout.js";

import createHero from "../../components/createHero.js";
import createMain from "../../components/createMain.js";

const bodyEl = gEl("body");

window.addEventListener("DOMContentLoaded", createNavbar);
window.addEventListener("DOMContentLoaded", createHero(bodyEl));
window.addEventListener("DOMContentLoaded", createMain(bodyEl));
window.addEventListener("DOMContentLoaded", createFooter);
