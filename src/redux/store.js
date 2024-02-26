import { configureStore } from "@reduxjs/toolkit"
import tasksSlice from "./features/tasks/tasksSlice";
const store = configureStore({
    reducer: {tasksSlice}
});
// lksd
export default store;