import React, { Component } from 'react';
import './App.css';

var todos = [
  {
    todoTitle: 'My first todo',
    todoResponsible: 'Pawel',
    todoDescription: 'My first todo description',
    todoPriority: 'low'
  },
  {
    todoTitle: 'My second todo',
    todoResponsible: 'Pawel',
    todoDescription: 'My second todo description',
    todoPriority: 'medium'
  },
  {
    todoTitle: 'My third todo',
    todoResponsible: 'Pawel',
    todoDescription: 'My third todo description',
    todoPriority: 'high'
  }
]


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todos
    };
  }

  render() {
    return (
      <div className="container">
        <h4>Todo count: <span className="badge badge-secondary">{this.state.todos.length}</span></h4>
        <ul className="lost-group">
          {this.state.todos.map((todo, index) =>
            <li className="list-group-item" key={index}>
              <h4 className="list-group-item-heading">{todo.todoTitle}</h4>
            </li>
          )}
        </ul>
      </div>

    );
  }
}

export default App;
