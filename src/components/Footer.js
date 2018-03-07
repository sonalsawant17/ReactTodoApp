import React, { Component } from 'react';
import "./Footer.css"
import ItemCountLabel from './ItemCountLabel';
import Button from './Button';

class Footer extends Component {

  render() {
    return (
      <div className="Footer">
        <footer className="App-footer">
          <ItemCountLabel count={this.props.todoList.length}/>
          <Button name={"All"} todoStatusFlag={null} updateTodoListByStatus={this.props.updateTodoListByStatus}/>
          <Button name={"Active"} todoStatusFlag={false} updateTodoListByStatus={this.props.updateTodoListByStatus}/>
          <Button name={"Completed"} todoStatusFlag={true} updateTodoListByStatus={this.props.updateTodoListByStatus}/>
        </footer>
      </div>
    );
  }
  
}

export default Footer;
