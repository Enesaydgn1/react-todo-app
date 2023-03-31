import React from "react";
import "./index.css";
import { useState } from "react";
import { Footer } from "../footer/Footer";
import Header from "../header/Header";


const List = () => {
  const [list, setList] = useState([
    {
      todoname: "Homework",
      todoActive: false
    },
    {
      todoname: "Exercise",
      todoActive: true
    }
 
  ]);


  const [filteredTodos, setFilteredTodos] = useState(list);
  const [newTodo , setNewtTodo] = useState("");
 
  const handleClikActive = (todo , index) => {
    const updatedList = [...list];
    const updatedTodo = { ...todo, todoActive: !todo.todoActive };
    updatedList.splice(index, 1, updatedTodo); // Dizideki mevcut öğeyi güncelle
    setList(updatedList);
    setFilteredTodos(updatedList); // Filtrelenmiş listeyi güncelle
  }


 

  const handleDelete = (index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  }

  const handAllComplated = () =>{
    const updatedTodos = filteredTodos.map(todo => {
      if (todo.todoActive == false) {
        return {
          ...todo,
          todoActive: true
        }
      }
      return todo;
    });
    setList(updatedTodos);
  } 

  const handleEdit = (index) => {
    let deger = "";
    while (deger === "") {
      deger = prompt("Enter the name you want to change");
      if (deger === "") {
        alert("Cannot be blank!");
      }
    }
  
    const updatedList = [...list];
    const updatedTodo = { ...list[index], todoname: deger };
    updatedList.splice(index, 1, updatedTodo);
    setList(updatedList);
    setFilteredTodos(updatedList);
    console.log(deger);
  }
  const handleAddTodo = (event) => {

    event.preventDefault();
    if  (!newTodo.trim() || /^\s*$/.test(newTodo)) {
      alert("Please enter a valid todo!");
      return;
    }
 
    const updatedList = [...list, {todoname: newTodo, todoActive:false}]
    setList(updatedList);
    setNewtTodo("");

}

  


  return (
    <div>
      <section className="todoapp" >
     
        <Header setNewtTodo={setNewtTodo} newTodo={newTodo} handleAddTodo={handleAddTodo}/>

        <section className="main">
          <input className="toggle-all" type="checkbox"  />
          <label for="toggle-all" onClick={() => handAllComplated()}>Mark all as complete</label>

          <ul className="todo-list">
            {filteredTodos.map((todo, index) => (
              <li key={index} className={todo.todoActive ? "completed" : ""}>
                <div className="view">
                  <input className="toggle" type="checkbox" defaultChecked={todo.todoActive} onChange={() => handleClikActive(todo, index)} />
                  <label onDoubleClick={() => handleEdit(index)}>{todo.todoname}</label>
                  <button className="destroy" onClick={() => handleDelete(index)}></button>
                </div>
              </li>
            ))}
        </ul>

        </section>
          <Footer list={list} setFilteredTodos={setFilteredTodos} filteredTodos={filteredTodos} setList={setList}/>
      </section>

   
    </div>
  );
};

export default List;
