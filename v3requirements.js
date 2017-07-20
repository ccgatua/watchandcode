// What's an object? - Groups related data together.
/** var myComputer {
operatingSystem: 'mac',
screenSize: '15 inches',
purchaseYear: 2011
};

myComputer.operatingSystem **/

// Store the todos array on an object

var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
   
};

// it should have a displayTodos method

var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos: function() {
        console.log('My Todos', this.todos);
    }
};

// It should have an addTodo method

/** Recall for V2:
function addTodo(todo) {
    todos.push(todo);
    displayTodos();
}
**/
var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos: function() {
        console.log('My Todos', this.todos);
    },
    addTodo: function(todo) {
        this.todos.push(todo);
        this.displayTodos();
}
};

// It should have a changeTodo method

var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos: function() {
        console.log('My Todos', this.todos);
    },
    addTodo: function(todo) {
        this.todos.push(todo);
        this.displayTodos();
    },
    changeTodo: function(position, newValue) {
        this.todos[position] = newValue;
        this.displayTodos();
    }
};

// It should have a deleteTodo method
    // Inside of var todoList add:
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos;
    }
    
    
// Final Code:
var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos: function() {
        console.log('My Todos', this.todos);
    },
    addTodo: function(todo) {
        this.todos.push(todo);
        this.displayTodos();
    },
    changeTodo: function(position, newValue) {
        this.todos[position] = newValue;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos;
    }
};