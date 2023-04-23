import { cEl } from "../utils/helpers.js";

export const createDelForm = (mainSection) => {
  const delForm = cEl("form");
  delForm.classList.add("form");
  delForm.classList.add("delForm");
  delForm.id = "delete-form";

  const formTitle = cEl("h3");
  formTitle.classList.add("formTitle");
  formTitle.textContent = "Delete Form";

  const inputId = cEl("input");
  inputId.classList.add("input");
  inputId.id = "itemId";
  inputId.type = "number";
  const labelId = cEl("label");
  labelId.setAttribute("for", "itemId");
  labelId.textContent = "ID:";

  const subInput = cEl("input");
  subInput.classList.add("subInput");
  subInput.value = "Send";
  subInput.type = "submit";

  mainSection.appendChild(delForm);
  delForm.appendChild(formTitle);
  delForm.appendChild(labelId);
  delForm.appendChild(inputId);

  delForm.appendChild(subInput);
};
