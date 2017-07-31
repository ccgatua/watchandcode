// .toggleAll: if everything's true, make everything false
// toggleAll: Otherwise, make everything true

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