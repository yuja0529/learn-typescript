let todoItems: { id: number; title: string; done: boolean }[];

interface Todo {
    id: number;
    title: string;
    done: boolean;
}

// api
function fetchTodoItems(): Todo[] {
    const todos = [
        { id: 1, title: "안녕", done: false },
        { id: 2, title: "타입", done: false },
        { id: 3, title: "스크립트", done: false },
    ];
    return todos;
}

// crud methods
function fetchTodos(): object[] {
    const todos = fetchTodoItems();
    return todos;
}

// void는 리턴값이 없다는 의미
function addTodo(todo: Todo): void {
    todoItems.push(todo);
}

function deleteTodo(index: number): void {
    todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: Todo): void {
    todo.done = true;
    todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): object {
    return todoItems[0];
}

function showCompleted(): object[] {
    return todoItems.filter((item) => item.done);

    // 위의 코드와 같은뜻
    // return todoItems.filter(function(item) {
    //     if (item.done) {
    //         return item;
    //     }
    // })
}

function addTwoTodoItems(): void {
    const item1 = {
        id: 4,
        title: "dkdk",
        done: false,
    };
    addTodo(item1);
    addTodo({
        id: 5,
        title: "dddddd",
        done: false,
    });
}

// NOTE: 유틸 함수
function log() {
    console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
