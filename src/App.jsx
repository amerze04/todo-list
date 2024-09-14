import TodoInput from "../components/TodoInput"
import TodoList from "../components/TodoList"
import {useEffect, useRef, useState} from 'react'


function App() {

  const [list, setList] = useState([]);
  const todo = useRef();

  function handleAddTodo() {

    if(todo.current.value.length) {
      let temp = [...list, todo.current.value];
      setList(temp);
      todo.current.value = '';
      updateStorage(temp);
    }

  }

  function handleDeleteTodo(index) {
    let temp = list.filter((_, itemIndex) => itemIndex !== index);
    setList(temp);
    updateStorage(temp);
  }

  function handleMoveUp(index) {
    if(index !== 0) {
      let temp = [...list];
      [temp[index - 1], temp[index]] = [temp[index], temp[index - 1]];
      setList(temp);
      updateStorage(temp);
    }
  }

  function handleMoveDown(index) {
    if(index < list.length - 1) {
      let temp = [...list];
      [temp[index ], temp[index + 1]] = [temp[index + 1], temp[index]];
      setList(temp);
      updateStorage(temp);
    }
  }

  function handleEditTask(index) {
    todo.current.value = list[index];
    handleDeleteTodo(index);
    todo.current.focus();
  }

  function updateStorage(newList) {
    localStorage.setItem("list", JSON.stringify({list: newList}));
  }

  useEffect(() => {
   if(localStorage) {

    let temp = localStorage.getItem("list");

    if(!temp) return;

    temp = JSON.parse(temp).list;

    setList(temp);
   }
  }, [])

  return (
    <>

    <TodoInput handleAddTodo={handleAddTodo} todo={todo} />

    <TodoList handleEditTask={handleEditTask} handleMoveDown={handleMoveDown} handleMoveUp={handleMoveUp} handleDeleteTodo={handleDeleteTodo} list={list} setList = {setList} />
      
    </>
  )
}

export default App
