// Propagation(전파 방식)
/* problem way : li 추가 시 Event 동작 않함.
const inputs = document.querySelectorAll("input");
for (input of inputs) {
    input.addEventListener("click", function (event) {
        alert("clicked");
    });
}
*/
// solving way : li 추가 시 Event 동작 않함.
const itemList = document.querySelector(".itemList");
itemList.addEventListener("click", function (event) {
  alert("clicked");
  //   console.log(event.target);
});
// add item in itemList - 1
const items = document.querySelector("ul.itemList");
const newItem = `<li>
    <input type="checkbox" id="item3">
        <label for="item3">새로운 아이템</label>
    </li>`;
// items.innerHTML = items.innerHTML + newItem;
// another way to add newItem - 2
items.insertAdjacentHTML("beforeend", newItem);
