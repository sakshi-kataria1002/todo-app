import React from "react";
import "./ToDo.style.css";
import TodoItem from './ToDoItem.component'

class ToDo extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      input: '',
    }
  }

  handleInput = (event) => {
    this.setState({
      input: event.target.value,
    })
  }

  handleAddTodo = () => {
    this.setState((state) => {
      return {
        ...state,
        todos: [...state.todos, this.state.input],
      };
    });
    this.setState({
      input: "",
    });
  };

  handleDeleteToDo() {
    this.props.actions.deleteTodo(this.props.todo.id)
  }

  handleEdit() {
    this.props.actions.editTodo(this.props.todo.id)
  }
  
  render() {
    return (
      <>
        <div className="add-todo">
            <input
                type="text"
                placeholder="New Task"
                onChange={this.handleInput}
                value={this.state.input}
            />
            <button onClick={this.handleAddTodo}>Add</button>
        </div>
        <div className="todos">
            {this.state.todos.map((todo, index) => {
                return <TodoItem key={index} todo={todo} />;
            })}
            <button onClick={this.handleDeleteToDo}>Delete ToDo</button>
        </div>
      </>
    )
  }
}

export default ToDo;