'use strict';

const inputText = document.querySelector('#inputext');
// console.log(inputText);

const addButton = document.querySelector('#add-button');

inputText.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
        addButton.click();
    }
});

const items = document.querySelector('#items');

function addItem() {
    const task = inputText.value;
    if (task.trim() === '') {
        alert('Please enter a task');
        return;
    }

    const item_html = 
    `<li class="item">`+
    ` <span class="task">${task}</span>`+
    ` <span class="manage">`+
    `    <span class="like">`+
    `        <i class="material-icons">favorite_border</i>`+
    `    </span>`+
    `    <span class="delete">`+
    `        <i class="material-icons">delete</i>`+
    `    </span>`+
    ` </span>`+
    `</li>`;
    console.log(task);
    items.insertAdjacentHTML('beforeend', item_html);   
    const like_icons = document.querySelectorAll('.like>i');
    console.log(like_icons);
    like_icons.forEach(function (icon) {
        icon.addEventListener('click', function () {
            // icon.classList.toggle('liked');
            if (icon.innerText === 'favorite_border') {
                icon.innerText = 'favorite';
            } else {
                icon.innerText = 'favorite_border';
            }
        });
    });

    const delete_icons = document.querySelectorAll('.delete');
    delete_icons.forEach(function (icon) {
        icon.addEventListener('click', function () {
            const item = icon.parentElement.parentElement;
            item.remove();
        });
    });

    inputText.value = ''; 
    inputText.focus();
}

addButton.addEventListener('click', function () {
    addItem();
});

