import React from "react";
import { Provider } from "react-redux";
import store from "@/store";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ThemeToggle from "@/components/atoms/ThemeToggle/ThemeToggle";
import TaskForm from "@/components/organisms/TaskForm/TaskForm";
import ListeTaches from "@/components/molecules/ListeTaches/ListeTaches";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <div>
          <h1>Application Connectify</h1>
          <ThemeToggle />
          <TaskForm />
          <ListeTaches />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
