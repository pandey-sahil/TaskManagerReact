const Navbar = ({ tasks }) => (
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-blue-400 mb-4">Todo List</h1>
      <h2 className="font-semibold text-zinc-400">
        Task Completed: {tasks.filter((task) => task.completed).length}/{tasks.length}
      </h2>
    </div>
  );
  
  export default Navbar;
  