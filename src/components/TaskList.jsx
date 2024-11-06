import { useState } from "react";

const TaskList = ({
  tasks,
  toggleCompleteTask,
  deleteTask,
  startEditingTask,
}) => {
  const [isDeletePopupVisible, setDeletePopupVisible] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [notification, setNotification] = useState("");

  const confirmDeleteTask = (task, index) => {
    setDeletePopupVisible(true);
    setTaskToDelete({ task, index });
  };

  const handleDeleteConfirmation = (confirm) => {
    if (confirm) {
      deleteTask(taskToDelete.index);
      setNotification("Task Deleted!");
    }
    setDeletePopupVisible(false);
    setTimeout(() => setNotification(""), 3000);
  };

  return (
    <div className="py-10">
      {/* Use responsive grid that adjusts columns based on the screen size */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="flex flex-col p-6 rounded-lg shadow-xl bg-zinc-700 text-white h-full"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">{task.title}</span>
              <span
                className={`text-sm px-2 py-1 rounded-full ${
                  task.priority === "High"
                    ? "bg-red-500"
                    : task.priority === "Medium"
                    ? "bg-yellow-500"
                    : "bg-green-500"
                }`}
              >
                {task.priority}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-300">Created at: {task.createdAt}</span>
              <div className="space-x-4">
                <button
                  onClick={() => startEditingTask(index)}
                  className="text-yellow-400 hover:text-yellow-500"
                >
                  ✏️
                </button>
                <button
                  onClick={() => confirmDeleteTask(task, index)}
                  className="text-red-400 hover:text-red-500"
                >
                  🗑️
                </button>
              </div>
            </div>

            <div
              onClick={() => toggleCompleteTask(index)}
              className={`mt-4 text-sm cursor-pointer text-center py-2 rounded-lg w-full transition duration-300 ${
                task.completed
                  ? "bg-green-500 text-white hover:bg-green-600"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {task.completed ? "Task Completed" : "Mark as Completed"}
            </div>
          </div>
        ))}
      </div>

      {isDeletePopupVisible && taskToDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center">
          <div className="bg-zinc-800 p-8 rounded-lg shadow-lg max-w-md w-full">
            <p className="text-white mb-4">
              {taskToDelete.task.completed
                ? "Are you sure you want to delete this task?"
                : "This task is not completed. Are you sure you want to delete it?"}
            </p>
            <div className="flex justify-end gap-5">
              <button
                onClick={() => handleDeleteConfirmation(true)}
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
              >
                Yes
              </button>
              <button
                onClick={() => handleDeleteConfirmation(false)}
                className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {notification && (
        <div className="fixed top-0 right-[40%] m-4 bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg">
          {notification}
        </div>
      )}
    </div>
  );
};

export default TaskList;
