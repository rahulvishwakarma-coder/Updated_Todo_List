import {removeTodo,completed} from '../features/todo/todoSlice.js'
import { useDispatch} from 'react-redux';

function TodoItem({handleEdit ,todo}) {
  // console.log(todo.completed);
  const dispatch = useDispatch();

  return (
    <li className=" text-gray-400 flex gap-9 items-center justify-between bg-white p-3 rounded-2xl">
      <input onChange={(e) => {dispatch(completed(todo.id))}} checked={todo.completed} type="checkbox" name={todo.id} id={todo.id} />
      <div className={todo.completed ? "line-through":""}>{todo.text} </div>
      <div className="flex gap-1">
        <button disabled ={todo.completed} onClick={() => handleEdit(todo.id,todo.text)} className="bg-blue-300 p-1 pr-3 pl-3 rounded-2xl text-white hover:bg-blue-400 hover:cursor-pointer">
          edit
        </button>
        <button  onClick={() => dispatch(removeTodo(todo.id))} className=" bg-red-300 p-1 pr-3 pl-3 rounded-2xl text-white hover:bg-red-400 hover:cursor-pointer">
          del
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
