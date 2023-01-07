const container = document.getElementById("container");
const title = document.getElementById("title");
const form = document.getElementById("form-color");
const btn = document.getElementById("btn");
const input = document.getElementById("input-color");
const randomBtn = document.getElementById("random-btn");

const getRandomNum = () => {
  return `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)})`;
};

const changeBgColor = (e) => {
  e.preventDefault();
  const titleColor = getRandomNum();
  container.style.background = input.value;
  title.style.color = titleColor;
  btn.style.background = titleColor;
  randomBtn.style.background = getRandomNum();
};

const changeRandomBgColor = () => {
  const titleColor = getRandomNum();
  const bgColor = getRandomNum();
  container.style.background = bgColor;
  title.style.color = titleColor;
  btn.style.background = titleColor;
  randomBtn.style.background = getRandomNum();
  input.value = bgColor;
};

form.addEventListener("submit", changeBgColor);

randomBtn.addEventListener("click", changeRandomBgColor);
