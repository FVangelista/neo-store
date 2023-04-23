import { gEl, cEl } from "../utils/helpers.js";
import { POST, PUT, DELETE } from "../utils/api.js";

import { createSelection } from "../components/createSelection.js";
import { createPostForm } from "../components/createPostForm.js";
import { createPutForm } from "../components/createPutForm.js";
import { createDelForm } from "../components/createDeleteForm.js";

export default function createMainPost(bodyEl) {
  const mainSection = cEl("section");
  mainSection.classList.add("mainSection");

  createSelection(mainSection);
  createPostForm(mainSection);
  createPutForm(mainSection);
  createDelForm(mainSection);

  bodyEl.appendChild(mainSection);

  const selectForm = gEl(".selection");
  const postForm = gEl(".postForm");
  const putForm = gEl(".putForm");
  const delForm = gEl(".delForm");

  selectForm.addEventListener("change", () => {
    const forms = [...document.querySelectorAll(".form")];
    forms.map((form) => form.classList.remove("show"));

    if (selectForm.value === "post") {
      postForm.classList.add("show");
    } else if (selectForm.value === "put") {
      putForm.classList.add("show");
    } else if (selectForm.value === "delete") {
      delForm.classList.add("show");
    }
  });

  postForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const schema = {
      title: e.target[0].value,
      price: parseInt(e.target[1].value),
      description: e.target[4].value,
      categoryId: parseInt(e.target[2].value),
      images: [e.target[3].value],
    };

    POST(schema, "products", "POST");
  });

  putForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const schema = {
      title: e.target[0].value,
      price: parseInt(e.target[1].value),
      description: e.target[4].value,
      categoryId: parseInt(e.target[2].value),
      images: [e.target[3].value],
    };

    PUT(schema, "products", "PUT", 207);
  });

  delForm.addEventListener("submit", (e) => {
    e.preventDefault();

    DELETE("products", "DELETE", parseInt(e.target[0].value));
  });
}
