const TaskItem = ({ task, index, toggleCompleteTask, deleteTask, startEditingTask }) => (
  <div className="flex items-center p-5 rounded-xl shadow-md bg-zinc-800 transition-transform">
    <span
      onClick={() => toggleCompleteTask(index)}
      className={`w-6 h-6 rounded-full mr-4 cursor-pointer transition duration-200 ${
        task.completed ? "bg-green-500" : "bg-zinc-600 hover:bg-blue-400"
      }`}
    ></span>
    <span className={`flex-grow text-xl ${task.completed ? "line-through text-zinc-500" : "text-zinc-200"}`}>
      {task.title}
    </span>
    <button
      onClick={() => startEditingTask(index)}
      className="text-zinc-400 opacity-70 mr-3 transition duration-300 hover:text-blue-400"
    >
      ✏️
    </button>
    <button
      onClick={() => deleteTask(index)}
      className="text-zinc-400 opacity-70 transition duration-300 hover:text-red-500"
    >
      🗑️
    </button>
  </div>
);

export default TaskItem;
