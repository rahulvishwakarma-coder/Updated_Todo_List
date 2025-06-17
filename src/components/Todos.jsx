import { useDispatch, useSelector } from "react-redux";
import { updateInput } from "../features/todo/todoSlice";
import { useEffect } from "react";
import TodoItem from "./TodoItem";

function Todos() {

    const Todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const handleEdit = (id,Input) =>{
      dispatch(updateInput({id,Input}));
    }

    useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(Todos));
    },[Todos])


    if(Todos.length === 0) return <ul className="bg-red-300 p-3 rounded-xl flex flex-col gap-2"> There is Not Task</ul>

  return (
    <>
      <ul className="bg-red-300 p-3 rounded-xl flex flex-col gap-2">
        {Todos.map((todo) => <TodoItem handleEdit={handleEdit} key={todo.id} todo={todo}/>)}
      </ul>
    </>
  );
}

export default Todos;
