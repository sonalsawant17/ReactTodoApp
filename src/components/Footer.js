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
          <Button name={"All"} updateFlag={null} updateFilter={this.props.updateFilter}/>
          <Button name={"Active"} updateFlag={false} updateFilter={this.props.updateFilter}/>
          <Button name={"Completed"} updateFlag={true} updateFilter={this.props.updateFilter}/>
        </footer>
      </div>
    );
  }
  
}

export default Footer;
