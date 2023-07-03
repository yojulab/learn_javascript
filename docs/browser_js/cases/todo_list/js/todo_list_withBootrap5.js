"use strict";

document.addEventListener('DOMContentLoaded', function () {
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function () {
            const todoItem = button.closest('.todo-item');
            todoItem.remove();
        });
    });

    const modifyButton = document.getElementById('modify-btn');
    modifyButton.addEventListener('click', function () {
        const checkboxes = document.querySelectorAll('.form-check-input');
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const todoItem = checkbox.closest('.todo-item');
                const inputField = todoItem.querySelector('.form-control');
                const newText = inputField.value;
                console.log('Modified todo item:', newText);
                // You can perform further actions with the modified text
            }
        });
    });

    const addButton = document.querySelector('.add-btn');
    addButton.addEventListener('click', function () {
        const inputField = document.querySelector('.form-control');
        const newItemText = inputField.value.trim();
        if (newItemText !== '') {
            const newTodoItem = `
                    <div class="todo-item">
                    <div class="input-group mb-3">
                        <div class="input-group-text">
                        <input type="checkbox" class="form-check-input">
                        </div>
                        <input type="text" class="form-control" value="${newItemText}">
                        <button class="btn btn-danger delete-btn">Delete</button>
                    </div>
                    </div>
                `;
            const todoItemsContainer = document.querySelector('.todo-items');
            todoItemsContainer.insertAdjacentHTML('beforeend', newTodoItem);
            inputField.value = '';
        }
    });
});
