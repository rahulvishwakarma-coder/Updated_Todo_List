import {createSlice,nanoid} from "@reduxjs/toolkit"



const initialState ={
    todos:JSON.parse(localStorage.getItem("todos")) === null ?[]:JSON.parse(localStorage.getItem("todos")),
    Input:{Input:"",id:null}
}


export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todos.push({
                id:nanoid(),
                text:action.payload,
                completed:false
            })
        },

        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo) => todo.id != action.payload);
        },
        updateTodo:(state,action) =>{
            state.todos.forEach((todo) => todo.id == action.payload.id ?todo.text = action.payload.text :todo)
        },
        updateInput:(state,action) =>{
            state.Input.id = action.payload.id;
            state.Input.Input = action.payload.Input;
        },
        completed:(state,action) =>{
            state.todos.forEach((todo) => todo.id == action.payload ? todo.completed = (!todo.completed):todo)
        }
    }
})

export const {addTodo,removeTodo,updateTodo,updateInput,completed} = todoSlice.actions;
export default todoSlice.reducer;