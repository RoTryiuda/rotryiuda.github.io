const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

//const todo = {id, text: 'some text', checked: false}

let todos = [];
let id = 0;

function newTodo() {
  //get Text
  const text = prompt('Enter task todo');
  //create todo
  const todo = {id: id++, text, checked: false };
  //append to list
  todos.push(todo);
  //render
  //console.log('todos: ', todos);
  render();
  //update counters

}

{/* <li>
  <input type="checkbox">
  <span>text task</span>
  <button>detele</button>
</li> */}

function render() {
  list.innerHTML = "";
  todos.map(todo => renderTodo(todo)).forEach(todo => list.append(todo));
  itemCountSpan.textContent = todos.length;
  uncheckedCountSpan.textContent = todos.filter(todo => todo.checked == false).length;
}

function renderTodo({id, text, checked}){
  let li = document.createElement('li');
  li.innerHTML = `<input type="checkbox" ${checked ? 'checked' : ''} onChange = "toggleTodo(${id})" class="todo-checkbox">
    <span>${text}</span>
    <button onClick="deleteTodo(${id})" class="todo-delete">detele</button>`
  return li;
}

function deleteTodo(id) {
  //console.log('from delete todo: ', id);
  todos = todos.filter(todo => todo.id !== id)
  //find todo to delete
  //delete todo
  render();
}

function toggleTodo(id){
  //console.log('from toggleTodo: ', id);
  //todos = todos.map(todo => todo.id === id ? {id: todo.id, text: todo.text, checked: !todo.checked} : todo);
  todos = todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo);

  render();
}