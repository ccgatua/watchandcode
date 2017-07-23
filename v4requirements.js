// todoList.addTodo should add objects

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
    changeTodo: function(position, newValue) {
        this.todos[position] = newValue;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos;
    }
};

// todoList.changeTodo should change the todoText property
    // in var todoList, edit changeTodo like so:
    changeTodo: function(position, todoText) { 
        this.todos[position].todoText = todoText;
        this.displayTodos();
    }

// todoList.toggleCompleted should change the completed property
    // think of toggleCompleted as a light switch
    !true   // bang operator, answer = false
var gordonBoolean = false;
!gordonBoolean  // !gordonBoolean = true;

toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
}



