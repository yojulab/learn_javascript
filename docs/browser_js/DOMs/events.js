"use strict";

const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  console.log("Button Clicked");
});

const google = document.querySelector("#google");
google.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Google Clicked");
});

// 이벤트 위임
// refer : https://www.notion.so/Javascript-Window-DOM-BOM-a0d3b424fc4c48559a1827c303b2f903
