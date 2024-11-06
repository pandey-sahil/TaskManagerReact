const TaskForm = ({ title, setTitle, isEditing, addTask, editTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      editTask();
    } else {
      addTask(title);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mb-6 w-full shadow-sm">
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        placeholder="What do you want to achieve today?"
        className="flex-grow px-5 py-4 border border-zinc-700 bg-zinc-700 text-zinc-200 placeholder-zinc-400 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-4 rounded-r-xl transition duration-300"
      >
        {isEditing ? "Save" : "+"}
      </button>
    </form>
  );
};

export default TaskForm;
