import React, { Component } from 'react';
import Header from './Header';
import TodoTextField from './TodoTextField';
import TodoList from './TodoList';
import Footer from './Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoStatusFlag: null,
      todoItemList: [],
      filteredList: []
    }
  }

  updateTodoList(updatedTodoList) {
    var updatedFilteredList = [];

    if (this.state.todoStatusFlag === null) {
      updatedFilteredList = updatedTodoList;
    } else {
      updatedFilteredList = updatedTodoList.filter(todoItem => {
        if (todoItem.status === this.state.todoStatusFlag) {
          return todoItem;
        }
      });
    }

    this.setState({
      todoItemList: updatedTodoList,
      filteredList: updatedFilteredList
    });

  }

  addTodo(text) {
    var todoItem = {
      id: this.state.todoItemList.length,
      text: text,
      status: false
    };
    this.state.todoItemList.push(todoItem);
    this.updateTodoList(this.state.todoItemList);
  }

  updateTodoStatus(updatedTodoItem) {
    var updatedTodoList = this.state.todoItemList.map(todoItem => {
      if (todoItem.id === updatedTodoItem.id) {
        todoItem.status = true;
      }
      return todoItem;
    });

    this.updateTodoList(updatedTodoList);
  }

  updateTodoListByStatus(statsFlag) {
    this.setState({
      todoStatusFlag: statsFlag
    }, () => {
      this.updateTodoList(this.state.todoItemList);
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <TodoTextField addTodo={this.addTodo.bind(this)} />
        <br />
        <br />
        <TodoList todoList={this.state.filteredList} updateTodoStatus={this.updateTodoStatus.bind(this)} />
        <br />
        <br />
        <Footer todoList={this.state.filteredList} updateTodoListByStatus={this.updateTodoListByStatus.bind(this)} />
      </div>
    );
  }

}

export default App;
