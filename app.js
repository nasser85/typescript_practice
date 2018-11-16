var myName = "nasser";
var helloWorld = function (hello) { return function (world) { return hello + " " + world; }; };
console.log(helloWorld('hello')('world') + ", " + myName);
var todo = {
    name: 'hello',
    completed: false
};
var TodoService = /** @class */ (function () {
    function TodoService(todos) {
        if (todos === void 0) { todos = []; }
        this.todos = todos;
    }
    TodoService.prototype.getById = function (todoId) {
        return this.todos[todoId];
    };
    TodoService.prototype.getAll = function () {
        return this.todos;
    };
    TodoService.prototype["delete"] = function (todoId) {
        this.todos = this.todos.filter(function (todo, index) { return index !== todoId; });
    };
    TodoService.prototype.addTodo = function (todo) {
        this.todos.push(todo);
        return todo;
    };
    TodoService.prototype.update = function (todo, todoId) {
        this.todos = this.todos.map(function (oldTodo, index) { return index === todoId ? todo : oldTodo; });
    };
    return TodoService;
}());
//*******************************************************************************************
var todoService = new TodoService();
console.log(todoService.getAll());
var func = function (low, high) {
    var rand = (high - low) * Math.random() + low;
    return rand;
};
console.group("Stuff");
func.cache = 6;
//func.cache.push(func(1,4))
func('2', 9);
func(27, 81);
console.log(func.cache);
