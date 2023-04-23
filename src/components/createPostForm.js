import { cEl } from "../utils/helpers.js";

export const createPostForm = (mainSection) => {
  const postForm = cEl("form");
  postForm.classList.add("form");
  postForm.classList.add("show");
  postForm.classList.add("postForm");
  postForm.id = "post-form";

  const formTitle = cEl("h3");
  formTitle.classList.add("formTitle");
  formTitle.textContent = "Post Form";

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

  mainSection.appendChild(postForm);
  postForm.appendChild(formTitle);
  postForm.appendChild(labelTitle);
  postForm.appendChild(inputTitle);
  postForm.appendChild(labelPrice);
  postForm.appendChild(inputPrice);
  postForm.appendChild(labelCategory);
  postForm.appendChild(inputCategory);
  postForm.appendChild(labelImg);
  postForm.appendChild(inputImg);
  postForm.appendChild(labelTextA);
  postForm.appendChild(textArea);
  postForm.appendChild(subInput);
};
