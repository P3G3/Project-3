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
          placeholder="Add New Item Here"
          onChange={this.props.handleInputItemChange}
        />
      </form>
    );
  };
}

export default Input;
