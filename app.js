const container = document.querySelector(".container");
const html = document.querySelector("html");
html.style.fontFamily = "'Poppins', sans-serif";

//Заголовок страницы
const heading = document.createElement("h1");
heading.innerText = "ToDo JavaScript";
heading.classList.add("text-center", "mt-2");
heading.style.fontFamily = "'Poppins', sans-serif";
container.append(heading);

//Div для инпута и кнопки
const inputDiv = document.createElement("div");
inputDiv.classList.add("text-bg-warning", "p-3", "d-flex", "justify-content-between");

//Инпут для ввода задачи
const input = document.createElement("input");
input.classList.add("rounded-pill", "p-2", "border-success", "w-75");
input.placeholder = "Ввести название дела";
input.addEventListener("focus", () => {
  input.placeholder = "";
});

//Кнопка для добаления дела
const btn = document.createElement("button");
btn.innerText = "Добавить";
btn.classList.add("btn", "btn-success");
btn.setAttribute("role", "submit");

//Подзаголовок для имеющихся дел
const headingBlock = document.createElement("h4");
headingBlock.innerText = "Список моих дел:";
headingBlock.classList.add("mt-3", "opacity-50");
headingBlock.style.fontFamily = "'Poppins', sans-serif";
headingBlock.style.fontWeight = "300";

//Список для вывода дел
const list = document.createElement("div");
list.style.listStyle = "none";
//Вставка элементов
inputDiv.append(input);
inputDiv.append(btn);
container.append(inputDiv);
container.append(headingBlock);
container.append(list);

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const inputValue = input.value;
  const listItem = document.createElement("div");
  listItem.classList.add("p-3", "d-flex", "justify-content-between", "align-items-center", "mb-2", "text-bg-success", "text-white-50");
  listItem.style.fontFamily = "'Poppins', sans-serif";
  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("role", "button");
  deleteBtn.innerText = "Удалить";
  deleteBtn.classList.add("btn", "btn-danger");
  deleteBtn.addEventListener("click", () => {
    listItem.remove();
  });
  list.append(listItem);
  listItem.append(inputValue, deleteBtn);
  input.value = input.placeholder;
});
