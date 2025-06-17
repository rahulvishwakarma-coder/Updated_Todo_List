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


    if(Todos.length === 0) return <ul className="h-70 w-60 justify-center items-center text-white text-2xl font-bold bg-red-300 p-3 rounded-xl flex flex-col gap-2">No Tasks</ul>

  return (
    <>
      <ul className="bg-red-300 p-3 rounded-xl flex flex-col gap-2">
        {Todos.map((todo) => <TodoItem handleEdit={handleEdit} key={todo.id} todo={todo}/>)}
      </ul>
    </>
  );
}

export default Todos;
