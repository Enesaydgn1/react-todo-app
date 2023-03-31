import React from 'react'

const Header = ({newTodo , setNewtTodo,handleAddTodo}) => {

  return (
    <div>
          <header className="header">
          <h1>Todos</h1>
          <form onSubmit={handleAddTodo}>
            <input
              className="new-todo"
              placeholder="What needs to be done?"
              autoFocus
              value={newTodo}
              onChange={(event) => setNewtTodo(event.target.value)}/>
 
          </form>
        </header>
    </div>
  )
}

export default Header