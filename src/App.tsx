import React from "react";
import ListeTaches from "@/components/molecules/ListeTaches/ListeTaches";
import { TaskProvider } from "@/contexts/TaskContext";

function App() {
  return (
    <TaskProvider>
      <div>
        <h1>Application Connectify</h1>
        <ListeTaches />
      </div>
    </TaskProvider>
  );
}

export default App;
