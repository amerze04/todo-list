import React from 'react'
import TodoCard from './TodoCard'

const TodoList = (props) => {

    const {handleEditTask, handleMoveDown, handleMoveUp, list, handleDeleteTodo} = props;

  return (
    <div className='list'>
        {list.map((item, index) => <TodoCard handleEditTask={handleEditTask} handleMoveDown={handleMoveDown} handleMoveUp={handleMoveUp} index={index} handleDeleteTodo={handleDeleteTodo} key={index} todo={item}/>)}
    </div>
  )
}

export default TodoList