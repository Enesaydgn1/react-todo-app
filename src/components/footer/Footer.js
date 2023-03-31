import React from 'react'
import { useState ,useEffect} from "react";

export const Footer = ({list , setFilteredTodos,filteredTodos,setList}) => {

  const [selectedList, setSelectedList] = useState("All")


  useEffect(() => {
    if (selectedList === "Completed") {
      setFilteredTodos(list.filter(todo => todo.todoActive === true));
    } else if (selectedList === "Active") {
      setFilteredTodos(list.filter(todo => todo.todoActive === false));
    } else if (selectedList === "All")  {
      setFilteredTodos(list);
    }
  }, [selectedList, list]);


  const handClearComp = () =>{
    const updatedTodos = filteredTodos.filter(todo => !todo.todoActive);
  setFilteredTodos(updatedTodos);
  setList(updatedTodos);
  } 

  return (
    
    <footer className="footer">
    <span className="todo-count">
      <strong>{list.filter(todo => !todo.todoActive).length}</strong>
      items left
    </span>

    <ul className="filters">
      <li>
        <a href="#/"  onClick={() => setSelectedList("All")} className={selectedList === "All" ? "selected " : "" }>
          All
        </a>
      </li>
      <li>
        <a href="#/" onClick={() => setSelectedList("Active")} className={selectedList === "Active" ? "selected " : "" }>Active</a>
      </li>
      <li>
        <a href="#/" onClick={() => setSelectedList("Completed")} className={selectedList === "Completed" ? "selected " : "" }>Completed</a>
      </li>
    </ul>

    {
        filteredTodos.some(todo => todo.todoActive === true) &&
        <button className="clear-completed" onClick={() => handClearComp()}>Clear completed</button>
    }

  </footer>


  )
}
