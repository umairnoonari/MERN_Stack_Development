import {createSlice} from '@reduxjs/toolkit'
import {clearAllUsers} from '../actions/index'
const userSlice=createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload)
            console.log(action.payload)
        },
        removeUser(state,action){
            state.splice(action.payload,1)
        },
    },
    extraReducers(builder){
        builder.addCase(clearAllUsers,()=>{
            return []
        })
    }
})
export default userSlice.reducer
export const {addUser,removeUser}=userSlice.actions