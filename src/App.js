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
  },
  {
    task: 'Wash Dogs',
    id: 1528817098324,
    completed: false
  },
  {
    task: 'Clean Yard',
    id: 1528817125310,
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

  toggleCompleted = (clickedItemId) => {
    this.setState({
      todo: this.state.todo.map((item) => {
        if (item.id === clickedItemId) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  addItem = (itemName) => {
    const newItem = {
      task: itemName,
      id: new Date(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newItem]
    });
  };

  clearCompleted = () => {
    const newTodo = this.state.todo.filter((item) => !item.completed);
    this.setState({
      todo: newTodo
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          todo={this.state.todo}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;