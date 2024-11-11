import React from "react";
import ListeTaches from "@/components/molecules/ListeTaches/ListeTaches";
import { TaskProvider } from "@/contexts/TaskContext";
import TaskForm from "@/components/organisms/TaskForm/TaskForm";


function App() {
  return (
    <TaskProvider>
      <div>
        <h1>Application Connectify</h1>
        <TaskForm />
        <ListeTaches />
      </div>
    </TaskProvider>
  );
}

export default App;
