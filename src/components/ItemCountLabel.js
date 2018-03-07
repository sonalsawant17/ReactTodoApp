import React, { Component } from 'react';

class ItemCountLabel extends Component {

    render() {
        return(
            <label className="ItemCount-label">{this.props.count} Items Left</label>
        );
    }
}

export default ItemCountLabel;