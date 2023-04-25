import { cEl } from "../utils/helpers.js";

export const createPutForm = (mainSection) => {
  const putForm = cEl("form");
  putForm.classList.add("form");
  putForm.classList.add("putForm");
  putForm.id = "put-form";

  const formTitle = cEl("h3");
  formTitle.classList.add("formTitle");
  formTitle.textContent = "Put Form";

  const inputId = cEl("input");
  inputId.classList.add("input");
  inputId.id = "itemId";
  inputId.type = "number";
  const labelId = cEl("label");
  labelId.setAttribute("for", "itemId");
  labelId.textContent = "ID:";

  const inputTitle = cEl("input");
  inputTitle.classList.add("input");
  inputTitle.id = "title";
  inputTitle.type = "text";
  const labelTitle = cEl("label");
  labelTitle.setAttribute("for", "title");
  labelTitle.textContent = "Title:";

  const inputPrice = cEl("input");
  inputPrice.classList.add("input");
  inputPrice.id = "price";
  inputPrice.type = "number";
  const labelPrice = cEl("label");
  labelPrice.setAttribute("for", "price");
  labelPrice.textContent = "Price:";

  const inputCategory = cEl("input");
  inputCategory.classList.add("input");
  inputCategory.id = "category";
  inputCategory.type = "number";
  const labelCategory = cEl("label");
  labelCategory.setAttribute("for", "category");
  labelCategory.textContent = "Category:";

  const inputImg = cEl("input");
  inputImg.classList.add("input");
  inputImg.id = "img";
  inputImg.type = "text";
  const labelImg = cEl("label");
  labelImg.setAttribute("for", "img");
  labelImg.textContent = "Image:";

  const textArea = cEl("textarea");
  textArea.classList.add("input");
  textArea.classList.add("textArea");
  textArea.id = "description";
  textArea.setAttribute("maxlength", "25");
  const labelTextA = cEl("label");
  labelTextA.setAttribute("for", "description");
  labelTextA.textContent = "Description:";

  const subInput = cEl("input");
  subInput.classList.add("subInput");
  subInput.value = "Send";
  subInput.type = "submit";

  mainSection.appendChild(putForm);
  putForm.appendChild(formTitle);
  putForm.appendChild(labelId);
  putForm.appendChild(inputId);
  putForm.appendChild(labelTitle);
  putForm.appendChild(inputTitle);
  putForm.appendChild(labelPrice);
  putForm.appendChild(inputPrice);
  putForm.appendChild(labelCategory);
  putForm.appendChild(inputCategory);
  putForm.appendChild(labelImg);
  putForm.appendChild(inputImg);
  putForm.appendChild(labelTextA);
  putForm.appendChild(textArea);
  putForm.appendChild(subInput);
};
