import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Tache } from "@/types/types";

interface TaskState {
  tasks: Tache[];
}

const initialState: TaskState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Tache>) => {
      state.tasks.push(action.payload);
    },
  },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
