"use strict";
// refer : https://www.notion.so/Javascript-Window-DOM-BOM-1-a0d3b424fc4c48559a1827c303b2f903
const title = document.getElementById("title");
// console.log({title});
title.style.color = "red";
console.log({ title });
const title2 = document.querySelector("#title");
console.log({ title2 });

const list = document.getElementsByClassName("list");
console.log({ list });
const list2 = document.querySelectorAll(".list");
console.log({ list2 });
const items = document.querySelectorAll(".list");
console.log({ items });

title2.style.color = "blue";
title2.style.backgroundColor = "yellow";
title2.innerHTML = "<h1>Hello</h1>";

const btn = document.querySelector("#btn");
btn.innerText = "Button Click me";

list2.firstElementChild.innerText = "Hello";
