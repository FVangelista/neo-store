import { cEl } from "../utils/helpers.js";

export const createSelection = (mainSection) => {
  const selectMenu = cEl("select");
  selectMenu.classList.add("selection");
  const optionPost = cEl("option");
  optionPost.value = "post";
  optionPost.textContent = "post";
  const optionPut = cEl("option");
  optionPut.value = "put";
  optionPut.textContent = "put";
  const optionDelete = cEl("option");
  optionDelete.value = "delete";
  optionDelete.textContent = "delete";

  mainSection.appendChild(selectMenu);
  selectMenu.appendChild(optionPost);
  selectMenu.appendChild(optionPut);
  selectMenu.appendChild(optionDelete);
};
