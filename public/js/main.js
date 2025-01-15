

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded fired!");
    const addTodoButton = document.getElementById("addTodo");
    const todoList = document.getElementById("todoList");
    // Event listener for button click
    addTodoButton.addEventListener("click", function () {
        console.log("Add Todo button clicked!");
        const content = window.prompt("Enter your new todo:");
        if (content) {
            // Create a new list item for the todo
            const li = document.createElement("li");
            li.textContent = content;
            // Append the new todo to the todo list
            todoList.appendChild(li);
        }
    });
});
