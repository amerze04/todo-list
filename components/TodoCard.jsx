import React, { useContext } from 'react'
import { CardContext } from '../context/CardContext'

const TodoCard = (props) => {

   const {handleEditTask, handleMoveDown, todo, index, handleDeleteTodo, handleMoveUp} = props;

    

  return (
    <div className='list-item'>
      <p className='todo-txt'>{todo}</p>
      <div className="buttons">
        <button onClick={() => handleDeleteTodo(index)} className="check-btn">
        <i className="fa-solid fa-square-check"></i>
        </button>
        <button onClick={() => handleEditTask(index)} className='edit-btn'>
        <i className="fa-solid fa-pen"></i>
        </button>
        <button onClick={() => handleMoveUp(index)} className="move-btn">
        <i className="fa-solid fa-arrow-up"></i>
        </button>
        <button onClick={() => handleMoveDown(index)} className="move-btn">
        <i className="fa-solid fa-arrow-down"></i>
        </button>
      </div>
    </div>
  )
}

export default TodoCard