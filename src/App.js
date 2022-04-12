import "./App.css";
import Header from "./Mycomponents/Header";
import { Todos } from "./Mycomponents/Todos";
// import { TodoItem } from "./Mycomponents/TodoItem";
import Footer from "./Mycomponents/Footer";
import {AddTodo} from "./Mycomponents/AddTodo";
import {About} from "./Mycomponents/About";
import { useState ,useEffect } from 'react';







function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }



  function onDelete(todo) {
    // console.log("Deleted", todo);

    setTodos(
      todos.filter((elem) => {
        return elem !== todo;
      })
    );
  }



  const addTodo= (title,desc)=>{
  
    let sno;
    if(todos.length===0){
    sno=0;
    }else{
     sno= todos[todos.length-1].sno +1;
    }
  

const myTodo={
  sno:sno,
  title:title,
  desc:desc
}

setTodos([...todos,myTodo]);

  }

  const [todos, setTodos] = useState( initTodo);

useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos));
              }
   ,[todos])


  return (
    
    // <Router>
    <>
      <Header title="Todos List" searchBar={false} />
      
           
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete} />

      

      <Footer />
    
</>



  );
}

export default App;
