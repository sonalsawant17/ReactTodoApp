import React, { Component } from 'react';
import Header from './Header';
import TodoTextField from './TodoTextField';
import TodoList from './TodoList';
import Footer from './Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItemList: [],
      selectedFilter: null,
      filteredList: []
    }
  }

  updateFilteredList(updatedTodoList) {

    var updatedFilteredList = [];

    if (this.state.selectedFilter === null) {
      updatedFilteredList = updatedTodoList;
    } else {
      updatedFilteredList = updatedTodoList.filter(item => {
        if (item.status === this.state.selectedFilter) {
          return item;
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
    this.updateFilteredList(this.state.todoItemList);
  }

  updateTodo(updatedTodoItem) {

    var updatedTodoList = this.state.todoItemList.map(todoItem => {
      if (todoItem.id === updatedTodoItem.id) {
        todoItem.status = true;
      }
      return todoItem;
    });

    this.updateFilteredList(updatedTodoList);
  }

  updateFilter(filter) {

    this.setState({
      selectedFilter: filter
    }, () => {
      this.updateFilteredList(this.state.todoItemList);
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <TodoTextField addTodo={this.addTodo.bind(this)} />
        <br />
        <br />
        <TodoList todoList={this.state.filteredList} updateTodo={this.updateTodo.bind(this)} />
        <br />
        <br />
        <Footer todoList={this.state.filteredList} updateFilter={this.updateFilter.bind(this)} />
      </div>
    );
  }

}

export default App;
