// Helpers

const gEl = (selection) => {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw Error(`Such element ${selection} does not exist.`);
  }
};

const cEl = (element) => document.createElement(element);

const removeActive = (arr, cls) => {
  arr.forEach((item) => {
    item.classList.remove(cls);
  });
};

const removeBefore = (wrapper) => {
  const getList = document.querySelectorAll(wrapper);

  getList && getList.forEach((el) => el.remove());
};

const calcTotal = (arr) => {
  let countTotal = 0;
  arr.map((item) => (countTotal += item.totalPrice));
  return countTotal;
};

export { gEl, cEl, removeActive, removeBefore, calcTotal };
