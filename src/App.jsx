import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Navbar from "./components/Navbar";

const App = () => {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

  const addTask = (title) => {
    if (title.trim() === "") return;
    const newTask = { title, completed: false };
    setTasks([...tasks, newTask]);
    setTitle("");
  };

  const toggleCompleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const startEditingTask = (index) => {
    setIsEditing(true);
    setCurrentTaskIndex(index);
    setTitle(tasks[index].title);
  };

  const editTask = () => {
    if (title.trim() === "") return;
    const updatedTasks = [...tasks];
    updatedTasks[currentTaskIndex].title = title;
    setTasks(updatedTasks);
    setTitle("");
    setIsEditing(false);
    setCurrentTaskIndex(null);
  };

  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center p-8 text-zinc-200">
      <div className="w-full max-w-lg bg-zinc-800 rounded-3xl shadow-2xl p-8">
        <Navbar tasks={tasks} />
        <TaskForm
          title={title}
          setTitle={setTitle}
          isEditing={isEditing}
          addTask={addTask}
          editTask={editTask}
        />
        <TaskList
          tasks={tasks}
          toggleCompleteTask={toggleCompleteTask}
          deleteTask={deleteTask}
          startEditingTask={startEditingTask}
        />
      </div>
    </div>
  );
};

export default App;
