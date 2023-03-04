import { configureStore } from "@reduxjs/toolkit";
import { todoSlise } from "redux/TodoSlice/Todoslice";

export default configureStore({
    reducer:{
        todos:todoSlise.reducer
    }
})