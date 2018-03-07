import React, { Component } from 'react';

class TodoTextField extends Component {
    
    addTodoCallback = (event) => {
        console.log("Inside addTodo");
        if (event.key === 'Enter') {
            console.log("Inside addTodo - if");
            this.props.addTodo(event.target.value);
        }
    }

    render(){
        

        return(
            <div className="TodoTextFieldDiv">
                <input className="TodoTextField" type="text" name="todoTextField" placeholder="What needs to be done?" autoFocus onKeyPress={this.addTodoCallback}/>
            </div>
        );
    }
}

export default TodoTextField;