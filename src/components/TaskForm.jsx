const TaskForm = ({
  title,
  setTitle,
  priority,
  setPriority,
  isEditing,
  addTask,
  editTask,
}) => {
  return (
    <div className="mb-6">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          isEditing ? editTask() : addTask();
        }}
        className="flex items-center space-x-4 justify-between"
      >
        <input
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-2/5 px-4 py-3 rounded-lg bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        />
        
        <div className="flex items-center space-x-4">
          <label className="text-white font-medium" htmlFor="priority">Priority:</label>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-3/5 px-4 py-3 rounded-lg bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <button
          type="submit"
          className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300"
        >
          {isEditing ? "Edit Task" : "Add Task"}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
