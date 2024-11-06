import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Navbar from "./components/Navbar";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");
  const [filter, setFilter] = useState("all"); // all, completed, pending

  // Load tasks from local storage on app load
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (title.trim() === "") return;
    const newTask = {
      title,
      completed: false,
      priority,
      createdAt: new Date().toLocaleString(), // Store current date and time
    };
    setTasks([...tasks, newTask]);
    setTitle("");
    setPriority("Low");
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
    setPriority(tasks[index].priority);
  };

  const editTask = () => {
    if (title.trim() === "") return;
    const updatedTasks = [...tasks];
    updatedTasks[currentTaskIndex] = {
      title,
      completed: false,
      priority,
      createdAt: updatedTasks[currentTaskIndex].createdAt, // Keep the original creation date
    };
    setTasks(updatedTasks);
    setIsEditing(false);
    setCurrentTaskIndex(null);
    setTitle("");
    setPriority("Low");
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
  });

  return (
    <div className="bg-zinc-900 min-h-screen">
      <div className="flex justify-between p-4 text-white">
        <Navbar />
      </div>
      <div className=" mx-auto p-8 rounded-lg ">
        <TaskForm
          title={title}
          setTitle={setTitle}
          priority={priority}
          setPriority={setPriority}
          isEditing={isEditing}
          addTask={addTask}
          editTask={editTask}
        />
        <div className="mt-6 flex gap-5">
          <button onClick={() => setFilter("all")} className="px-4 py-2 bg-blue-500 text-white rounded">All</button>
          <button onClick={() => setFilter("completed")} className="px-4 py-2 bg-green-500 text-white rounded">Completed</button>
          <button onClick={() => setFilter("pending")} className="px-4 py-2 bg-yellow-500 text-white rounded">Pending</button>
        </div>

        {/* Display No Tasks Message */}
        {filteredTasks.length === 0 && (
          <div className="mt-6 text-center text-xl text-gray-300">
            No tasks found. Add some tasks!
          </div>
        )}
        <hr className="mt-10 border-none h-[1px] bg-zinc-600" />

        <TaskList
          tasks={filteredTasks}
          toggleCompleteTask={toggleCompleteTask}
          deleteTask={deleteTask}
          startEditingTask={startEditingTask}
        />
      </div>
    </div>
  );
};

export default App;
