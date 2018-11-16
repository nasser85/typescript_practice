var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var myName = "nasser";
var helloWorld = function (hello) { return function (world) { return hello + " " + world; }; };
console.log(helloWorld('hello')('world') + ", " + myName);
var todo = {
    name: 'hello',
    completed: false
};
var TodoUtility = /** @class */ (function () {
    function TodoUtility() {
    }
    TodoUtility.prototype.prepareTodo = function (todo) {
        todo.id = new Date().getTime();
        return todo;
    };
    return TodoUtility;
}());
var TodoService = /** @class */ (function (_super) {
    __extends(TodoService, _super);
    function TodoService(todos) {
        if (todos === void 0) { todos = []; }
        var _this = _super.call(this) || this;
        _this.todos = todos;
        return _this;
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
    TodoService.prototype.updateTodo = function (todo, todoId) {
        this.todos = this.todos.map(function (oldTodo, index) { return index === todoId ? todo : oldTodo; });
    };
    return TodoService;
}(TodoUtility));
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
