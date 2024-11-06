const TaskItem = ({ task, index, toggleCompleteTask, deleteTask, startEditingTask }) => (
  <div className="flex items-center p-5 rounded-xl max-w-12 shadow-md bg-zinc-700 text-white transition-transform">
    <span
      onClick={() => toggleCompleteTask(index)}
      className={`w-6 h-6 rounded-full mr-4 cursor-pointer transition duration-200 ${
        task.completed ? "bg-green-500" : "bg-zinc-600 hover:bg-blue-400"
      }`}
    ></span>
    <span className={`flex-grow text-xl ${task.completed ? "line-through" : ""}`}>
      {task.title}
    </span>
    <span className="ml-4 text-sm">{task.dueDate}</span>
    <span className="ml-4 px-2 py-1 text-sm rounded-full text-white bg-blue-500">
      {task.priority}
    </span>
    <span className="ml-4 text-xs text-gray-300">Created at: {task.createdAt}</span>
    <button
      onClick={() => startEditingTask(index)}
      className="ml-2 text-yellow-400"
    >
      ✏️
    </button>
    <button
      onClick={() => deleteTask(index)}
      className="ml-2 text-red-400"
    >
      🗑️
    </button>
  </div>
);

export default TaskItem;
