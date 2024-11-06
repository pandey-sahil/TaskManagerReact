import TaskItem from "./Taskitem";


const TaskList = ({ tasks, toggleCompleteTask, deleteTask, startEditingTask }) => (
  <div className="space-y-4">
    {tasks.length > 0 ? (
      tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          toggleCompleteTask={toggleCompleteTask}
          deleteTask={deleteTask}
          startEditingTask={startEditingTask}
        />
      ))
    ) : (
      <h1 className="text-blue-400 font-semibold text-xl">No pending tasks...</h1>
    )}
  </div>
);

export default TaskList;
