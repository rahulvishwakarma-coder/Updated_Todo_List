import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";


function App() {

  let todos = [{id:1,text:"This is Todo 1"},{id:2,text:"This is Todo 2"},{id:3,text:"This is Todo 3"}]

  const updateTodo = (inputId,input) =>{
    todos.forEach((todo) => todo.id == inputId ? todo.text = input :todo)
  }
  
  return (
    <div className="gap-3 flex justify-center items-center h-screen flex-col">
    <AddTodo/>
    <Todos/>
    </div>
  )
}

export default App
