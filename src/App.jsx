import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import TotalTask from "./components/TotalTask";

function App() {

  return (
    <div className="gap-3 flex justify-center mt-20 items-center flex-col">
      <TotalTask />
      <div className="flex items-center justify-center flex-col gap-3">
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}

export default App;
