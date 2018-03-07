import React, { Component } from 'react';

class Button extends Component {

    onClickCallback = () => {
        this.props.updateTodoListByStatus(this.props.todoStatusFlag);
    }

    render() {
        return (
            <button className="Button" type="button" name={this.props.name} onClick={this.onClickCallback}>{this.props.name}</button>
        );
    }

}

export default Button;