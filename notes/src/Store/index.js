import { configureStore } from "@reduxjs/toolkit";
import NoteSlice from "./slices/NoteSlice";
const store=configureStore({
    reducer:{
        notes:NoteSlice
    }
})
export default store