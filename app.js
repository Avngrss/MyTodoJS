const container = document.querySelector(".container");

const colors = {
  yellow: "#FF8C00",
  blue: "#20B2AA",
  green: "#32CD32",
};

//Заголовок страницы
const heading = document.createElement("h1");
heading.innerText = "ToDo JavaScript";
heading.classList.add("text-center", "mt-2");
heading.style.fontFamily = "'Poppins', sans-serif";
heading.style.color = `${colors.blue}`;
container.append(heading);

//Div для инпута и кнопки
const inputDiv = document.createElement("div");
inputDiv.classList.add("text-bg-warning", "p-3", "d-flex", "justify-content-between");

//Инпут для ввода задачи
const input = document.createElement("input");
input.classList.add("rounded-pill", "p-2", "border-success", "w-75");
input.placeholder = "What do you have planned?";
input.addEventListener("focus", () => {
  input.placeholder = "";
});

//Кнопка для добаления дела
const btn = document.createElement("button");
btn.innerText = "Add";
btn.classList.add("btn", "btn-success");
btn.setAttribute("role", "submit");

//Подзаголовок для имеющихся дел
const headingBlock = document.createElement("h4");
headingBlock.innerText = "My To-Do List:";
headingBlock.classList.add("mt-3");
headingBlock.style.fontFamily = "'Poppins', sans-serif";
headingBlock.style.fontWeight = "300";
headingBlock.style.color = `${colors.yellow}`;

//Список для вывода дел
const list = document.createElement("div");

//Вставка элементов
inputDiv.append(input);
inputDiv.append(btn);
container.append(inputDiv);
container.append(headingBlock);
container.append(list);

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const inputValue = input.value;
  if (!inputValue) {
    alert("Enter your task");
    return;
  }
  const listItem = document.createElement("div");
  const check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  check.style.marginRight = "30px";
  check.style.height = "50px";
  check.style.width = "50px";
  check.addEventListener("input", (e) => {
    if (e.currentTarget.checked == true) {
      listItem__el.setAttribute("disable", "readonly");
      editBtn.classList.add("disabled");
      listItem__el.style.textDecoration = "line-through";
      listItem__el.style.color = `${colors.green}`;
    } else {
      listItem__el.removeAttribute("disable", "readonly");
      editBtn.classList.remove("disabled");
      listItem__el.style.textDecoration = "none";
    }
  });
  listItem.append(check);
  const listItem__el = document.createElement("input");
  listItem__el.value = inputValue;
  listItem__el.classList.add("w-100", "text-bg-success", "text-white-50", "p-2");
  listItem__el.style.marginRight = "20px";
  listItem__el.style.borderColor = `${colors.blue}`;
  listItem__el.setAttribute("readonly", "readonly");
  listItem.classList.add("p-3", "d-flex", "justify-content-between", "align-items-center", "mb-2", "text-bg-success", "text-white-50");
  listItem.style.fontFamily = "'Poppins', sans-serif";
  const editBtn = document.createElement("button");
  editBtn.classList.add("btn", "btn-primary");
  editBtn.innerText = "Edit";
  editBtn.style.marginRight = "20px";
  editBtn.addEventListener("click", () => {
    if (editBtn.innerText == "Edit") {
      listItem__el.removeAttribute("readonly");
      listItem__el.focus();
      editBtn.innerText = "Save";
    } else {
      listItem__el.setAttribute("readonly", "readonly");
      editBtn.innerText = "Edit";
    }
  });
  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("role", "button");
  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("btn", "btn-danger");
  deleteBtn.addEventListener("click", () => {
    listItem.remove();
  });
  list.append(listItem);
  listItem.append(listItem__el, editBtn, deleteBtn);
  input.value = "";
});
