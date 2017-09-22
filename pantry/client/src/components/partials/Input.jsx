import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <form
        onSubmit={this.props.handleItemSubmit}
      >
        <input
          type="text"
          placeholder="Add New Item Here"
        />
      </form>
    );
  };
}

export default Input;
