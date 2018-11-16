var myName: string = "nasser";

const helloWorld = (hello: string | any[]) => (world: string) => `${hello} ${world}`;


console.log(`${helloWorld('hello')('world')}, ${myName}`)



//******************************************************************************************
// Interfaces define the types for properties and methods of and object or class
interface Todo {
	name: string;
	date?: number;  //? tells us date param is optional
	completed: boolean;
}
var todo: Todo = {
	name: 'hello',
	completed: false
}
//************************************************************************************************




//****************************************************************************************
// Interface describing a class
interface TodoService {
	getById(todoId: number): Todo; // function whose param is a number and returns an object of type Todo
	getAll(): Todo[];
	delete(todoId: number): void; //void keyword is for method that doesn't return anything
	addTodo(todo: Todo): Todo;
	updateTodo(todo: Todo, todoId: number): Todo
}

class TodoService {

	constructor(private todos: Todo[] = []) {}

	getById(todoId) {
		return this.todos[todoId]
	}

	getAll() {
		return this.todos
	}

	delete(todoId) {
		this.todos = this.todos.filter( (todo, index) => index !== todoId)
	}

	addTodo(todo) {
		this.todos.push(todo);
		return todo
	}

	update(todo, todoId) {
		this.todos = this.todos.map( (oldTodo, index) => index === todoId ? todo : oldTodo)
	}
}
//*******************************************************************************************



var todoService = new TodoService();
console.log(todoService.getAll())

interface generateRandom {
	(low: number, high: number): number;
	cache: any[];
}

const func = <generateRandom>(low,high) => {
	let rand = (high-low)*Math.random() + low;
	return rand;
}
console.group(`Stuff`)
func.cache = 6
//func.cache.push(func(1,4))
func('2',9)
func(27,81)
console.log(func.cache)