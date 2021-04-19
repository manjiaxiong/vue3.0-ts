import Todo from '../types/todo'
export function saveTodo (todos:Todo[]){
    localStorage.setItem('todo_key',JSON.stringify(todos))
}
export function getTodo():Todo []{
    return JSON.parse(localStorage.getItem('todo_key')||'[]')
}