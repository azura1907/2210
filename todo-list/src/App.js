import { useState } from "react";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const todoListDefaultValue = localStorage.getItem('todoList');

  const [todoList, setTodoList] = useState(todoListDefaultValue ? JSON.parse(todoListDefaultValue) : []);

  const [todoItem, setTodoItem] = useState('');

  const [editItem, setEditItem] = useState(null);

  const [search, setSearch] = useState('');

  const handleAddTodo = () => {
    if (!todoItem) return;

    if (editItem) {
      // handle edit in this scope
      // tao ra 1 mang moi 
      const newTodoList = [...todoList];
      // tim index cua todo muon edit
      const todoIndex = newTodoList.findIndex((element) => {
        return element.id === editItem;
      })

      // set gia tri moi cho todo voi index vua tim
      if (todoIndex !== -1) {
        newTodoList[todoIndex].todo = todoItem;
        setTodoList(newTodoList);
        setTodoItem('');
        setEditItem(null);
        localStorage.setItem('todoList', JSON.stringify(newTodoList));

      }
      // set gia tri moi cho todo list
      return;
    }

    const newTodo = {
      id: 'id-' + Math.random() * 99999,
      todo: todoItem,
      isActive: false
    }

    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
    setTodoItem('');
    localStorage.setItem('todoList', JSON.stringify(newTodoList));
  }

  const handleRemoveTodo = (todo) => {
    const newTodoList = [...todoList];
    const todoIndex = newTodoList.findIndex((todoElement) => {
      return todo.id === todoElement.id
    })

    if (todoIndex !== -1) {
      newTodoList.splice(todoIndex, 1);
      setTodoList(newTodoList);

      localStorage.setItem('todoList', JSON.stringify(newTodoList));

    }
  }

  const handleEditTodo = (todo) => {
    setTodoItem(todo.todo);
    setEditItem(todo.id);
  }

  const handleChangeActive = (todo, activeValue) => {
    const newTodoList = [...todoList];
    const todoIndex = newTodoList.findIndex((todoElement) => {
      return todo.id === todoElement.id
    })

    if (todoIndex !== -1) {
      newTodoList[todoIndex].isActive = activeValue;
      setTodoList(newTodoList);

      localStorage.setItem('todoList', JSON.stringify(newTodoList));

    }
  }

  const filteredTodoList = [...todoList].filter((todo) => {
    return todo.todo.toLowerCase().includes(search);
  })
  return (
    <div>
      <header>
        <div
          className="logo-cover text-center bg-danger mt-5 mb-3 fs-1 text-light d-flex justify-content-center align-items-center">
          <i className="logo fa-regular fa-heart "></i>
        </div>
        <div className="header-content mx-5 text-center">
          <h1>Choulee's To Do List</h1>
        </div>
      </header>

      <div className="container">
        <TodoInput
          editItem={editItem}
          handleAddClick={handleAddTodo}
          handleInputChange={setTodoItem}
          inputValue={todoItem} />
        <TodoList
          handleChangeActive={handleChangeActive}
          search={search}
          setSearch={setSearch}
          editTodo={handleEditTodo}
          todoList={filteredTodoList}
          removeTodo={handleRemoveTodo} />
      </div>
    </div>
  );
}

export default App;
