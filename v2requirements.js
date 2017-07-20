// Have function to display todos
var todos = ['item 1', 'item 2', 'item 3'];
function displayTodos() {
    console.log('My todos:', todos);
}
displayTodos();

// Add todos

function addTodo() {
    todos.push('new todo');
}
addTodo();
displayTodos();

function addTodo(todo) {
    todos.push(todo);
    displayTodos();
}

addTodo('hello there');              // now todo = 'hello there'
    
// Change todos
function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos();
}
changeTodo(0, 'changed');
changeTodo(0, 'changed again');

// Delete todos
function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}
deleteTodo(0);
deleteTodo(2);
