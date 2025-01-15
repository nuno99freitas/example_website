import { generateClient } from "././aws-amplify/data";
import { Amplify } from '././aws-amplify';
import outputs from '../amplify_outputs.json';

Amplify.configure(outputs);

const client = generateClient();

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded fired!");

    const todoList = document.getElementById("todoList");
    const addTodoButton = document.getElementById("addTodo");

    addTodoButton.addEventListener("click", createTodo);

    function updateUI() {
        todoList.innerHTML = '';
        todos.forEach(todo => {
            const li = document.createElement('li');
            li.textContent = todo.content || '';
            todoList.appendChild(li);
        });
    }

function createTodo() {
      console.log('createTodo');
      const content = window.prompt("Todo content");
      if (content) {
          client.models.Todo.create({ content }).then(response => {
              if (response.data && !response.errors) {
                  todos.push(response.data);
                  updateUI();
              } else {
                  console.error('Error creating todo:', response.errors);
                  alert('Failed to create todo.');
              }
          }).catch(error => {
              console.error('Network or other error:', error);
              alert('Failed to create todo due to a network or other error.');
          });
      }
  }

    client.models.Todo.observeQuery().subscribe({
        next: (data) => {
            todos.splice(0, todos.length, ...data.items);
            updateUI();
        }
    });
});
