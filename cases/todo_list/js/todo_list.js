"use strict";

const inputText = document.querySelector("#inputext");
// console.log(inputText);

const addButton = document.querySelector("#add-button");

inputText.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    addItem();
  }
});

const items = document.querySelector("#items");

function addItem() {
  const task = inputText.value;
  if (task.trim() === "") {
    inputTextFocus(inputText);

    alert("Please enter a task");
    return;
  }

  const item_html =
    `<li class="item">` +
    ` <span class="task">${task}</span>` +
    ` <span class="manage">` +
    `    <span class="like">` +
    `        <i class="material-icons">favorite_border</i>` +
    `    </span>` +
    `    <span class="delete">` +
    `        <i class="material-icons">delete</i>` +
    `    </span>` +
    ` </span>` +
    `</li>`;
  console.log(task);
  items.insertAdjacentHTML("beforeend", item_html);

  const target_item = document.querySelector("li:last-child");

  const like_icons = target_item.querySelector(".like>i");
  console.log(like_icons);
  like_icons.addEventListener("click", function (event) {
    const target = event.target;
    // console.log(`favorite : ${target.innerText}`);
    if (target.innerText === "favorite_border") {
      target.innerText = "favorite";
    } else {
      target.innerText = "favorite_border";
    }
  });

  const delete_icons = target_item.querySelector(".delete>i");
  delete_icons.addEventListener("click", function (event) {
    const target = event.target;
    console.log(`delete : ${target.innerText}`);
    const item = target.parentElement.parentElement.parentElement;
    item.remove();
  });

  inputTextFocus(inputText);
}

addButton.addEventListener("click", function () {
  addItem();
});

function inputTextFocus(target) {
  target.value = "";
  target.focus();
}
