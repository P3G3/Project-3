import React, { Component } from 'react';

class Input extends Component {

  render() {
    return (
      <form
        onSubmit={this.props.handleItemSubmit}
      >
        <input
          id="addItem"
          value={this.props.inputItemValue}
          type="text"
          name="ingredient"
          placeholder="Add New Item To Your Pantry"
          onChange={this.props.handleInputItemChange}
        />
      </form>
    );
  };
}

export default Input;
