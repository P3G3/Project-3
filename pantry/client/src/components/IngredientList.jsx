import React, { Component } from 'react';

class IngredientList extends Component {
  constructor() {
    super();
    // state
    this.state = {
      ingredientListData: [],
      ingredientListDataReceived: false,
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/inventory')
      .then((res) => {
        return res.json();
      }).then((jsonRes) => {
        console.log(jsonRes.data);
        this.setState({
          ingredientListData: jsonRes.data,
          ingredientListDataReceived: true,
        })
      })
  }

  renderIngredientList() {
      return this.state.ingredientListData.map((ingredient) => {
        console.log()
    });
}

  render() {
    return (
      <div className="ingredientlist">
        {this.renderIngredientList}
      </div>
    );
  };
}

export default IngredientList;
