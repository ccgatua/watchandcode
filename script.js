var todoList = {
    todos: [],
    displayTodos: function() {
        console.log('My Todos', this.todos);
    },
    addTodo: function(todoText) {   // addTodo('hi')
        this.todos.push( {
            todoText: todoText,             // todoText: 'hi',
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText) { 
        this.todos[position].todoText = todoText;
        this.displayTodos()
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos;
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
},
    displayTodos: function() {
        if (this.todos.length === 0) {
            console.log*'Your todo list is empty!';
        } else {
            console.log('My Todos:');
        for (var i = 0; i < this.todo.length; i++) {
            if (this.todo[i].completed === true) {
                console.log('(x)', this.todos[i].todoText);
            } else {
                console.log('( )', this.todos[i].todoText);
            }
        }
    }
    },
    toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    
    // Get number of completed todos.
    for (var i = 0; i < totalTodos; i++) {
        if (this.todos[i].completed == true) {
            completedTodos++;
        }
    }
    // Case 1: if everything's true, make everything false.
    if (completedTodos === totalTodos) {
        for (var i = 0; i < totalTodos; i++) {
            this.todos[i].completed = false;
        }
    // Case 2: otherwise make everything true.
    } else {
        for (var i =0; i < total Todos; i++) {
            this.todos[i].completed = true;
        }
    }
    this.displayTodos()
};

// 1. We want to get access to the display todos button.
var displayTodosButton = document.getElementById('displayTodosButton');

// 2. We want to run displayTodos method, when someone clicks the display
// todos button.
displayTodosButton.addEventListener('click', function() {
    todoList.displayTodos();
});

// Case 3: Clicking "Toggle all" should run todoList.toggleAll
var toggleAllButton = document.getElementByID('toggleAllButton');

toggleAllButton.addEventListener('click', function () {
    todoList.toggleAll();
});