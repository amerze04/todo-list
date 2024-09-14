import React from 'react'

const TodoInput = (props) => {

    const {todo, handleAddTodo} = props;

  return (
    <div className='header'>

        <input ref={todo} placeholder='Enter a task...' type="text" id="input" />

        <button onClick={handleAddTodo} className='add-btn'>
        Add
        </button>

    </div>
  )
}

export default TodoInput