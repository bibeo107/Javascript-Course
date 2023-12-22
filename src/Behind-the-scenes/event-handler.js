document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', function () {
            console.log("Button clicked. 'this' refers to:", this);

            this.textContent = 'Clicked!';
            this.classList.add('clicked');
        });
    });

    const todoItems = document.querySelectorAll('.todo-item');

    todoItems.forEach((todoItem) => {
        todoItem.addEventListener('click', function () {
            console.log("Todo item clicked. 'this' refers to:", this);

            this.classList.toggle('completed');
        });
    });
});
