import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/Todo.css";

const todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: todoData,
      toggleCompleted: () => { },
    };
  }

  toggleCompleted = (clickedTaskId) => {
    this.setState({
      todo: this.state.todo.map((task) => {
        if (task.id === clickedTaskId) {
          return {
            ...task,
            completed: !task.completed
          };
        } else {
          return task;
        }
      })
    });
  };

  addTask = (taskTask) => {
    const newTask = {
      task: taskTask,
      id: new Date(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newTask]
    });
  };

  render() {
    return (
      <div classTask="App">
        <div classTask="header">
          <h1>Todo List</h1>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList
          todo={this.state.todo}
          toggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default App;