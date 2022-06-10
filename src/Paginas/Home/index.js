import react from "react";

import TodoProvider from "../../contexts/TodoContext";
import TodoList from "../../Components/TodoList"
import AddTodo from "../../Components/AddTodo"


function Home () {

  return (
  <div>
  <TodoProvider>
       <TodoList></TodoList>
       <br/>
      <hr/>
      <br/>
       <AddTodo></AddTodo>
   </TodoProvider>
   </div>
  );
}

export default Home;
//Desenvolver nesta pagina q tia Hannaty mandou
//link to "/meucontato"
