import ToDo from "./components/ToDo.component";
import "./App.css";

const App = () => {
  return (
    <div className="todo_container">
      <h1>ToDo List</h1>
      <ToDo />
    </div>
  );
};

export default App;