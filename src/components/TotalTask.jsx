import { useEffect,useState } from "react";
import { useSelector } from "react-redux";

function TotalTask() {

  const [total,setTotal] = useState(0);
  const todos = useSelector((state) => state.todos);

  useEffect(()=>{
    let Total = 0;

    todos.map((todo) =>{
        if(todo.completed == true){
            Total += 1;
        }
    })
    setTotal(Total);
  },[todos])

  return (
    <div className="bg-red-300 p-4 pr-5 pl-5 rounded-2xl flex gap-4">
      <div className=" text-purple-500 bg-red-100 p-2 pr-3 pl-3 rounded-xl">
        Total Task : {todos.length}
      </div>
      <div className=" text-orange-400 bg-red-100 p-2 pr-3 pl-3 rounded-xl">
        Completed Task :{total}
      </div>
    </div>
  );
}

export default TotalTask;
