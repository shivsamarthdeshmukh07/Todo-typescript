import { createSlice,nanoid } from '@reduxjs/toolkit'
import { TaskComponentProps } from '../../components/taskComponent/taskComponent';

type TasksState ={
    arr: TaskComponentProps[];
  }
const initialState:TasksState={
    arr:[]
}

const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state=initialState,action)=>{
            state.arr.push({id:nanoid(),...action.payload})
            
        },
        updateTodo:(state,action)=>{
         state.arr.forEach((item, idx)=>{
                if(item.id === action.payload.id){
                   state.arr.splice(idx, 1,action.payload)
                }
            })
        },
        deleteTodo:(state,action)=>{
        
            state.arr.forEach((item, index)=>{
                console.log("hiiiiiiiiiiiiii")
                if(item.id === action.payload){
                   state.arr.splice(index, 1)
                }
            }) 
        }

    }
})

export default todoSlice.reducer

export const {addTodo,updateTodo,deleteTodo} = todoSlice.actions


