import {useDispatch ,useSelector} from "react-redux"
import { addTodo ,updateInput,updateTodo} from "../features/todo/todoSlice"
import { useEffect, useState } from "react";

function AddTodo() {
    const {Input,id} = useSelector(state => state.Input);
    const [value ,setValue ] = useState("Add");

    const dispatch = useDispatch()

    useEffect(()=>{
      if(id == null){
        setValue("Add");
      }
      else{
        setValue("Edit");
      }
    },[id])

    const addTodoHandler = (e) =>{
        e.preventDefault();

        if(Input === "") return alert("Please Enter Something ");

        if(id == null){
          dispatch(addTodo(Input));
        }
        else{
          dispatch(updateTodo({id,text:Input})) 
        }
        dispatch(updateInput({Input:"",id:null}))
        // dispatch(updateInput(""));
    }

  return (
    <form className="bg-red-200 flex gap-2 p-3 rounded-2xl" onSubmit={(e) => addTodoHandler(e)}>
        <input className="bg-white rounded-xl p-1" placeholder="Add Task " onChange={(e)=>dispatch(updateInput({Input:e.target.value,id:id == null ? null:id}))} value={Input} type="text" />
        <button className="bg-blue-300 p-2 pr-4 pl-4 text-white rounded-2xl hover:cursor-pointer
        hover:bg-blue-400
        " type="submit">{value}</button>
    </form>
  )
}

export default AddTodo
