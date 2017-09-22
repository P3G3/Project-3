import React, { Component } from 'react';
import Ingredient from './Ingredient';
import Input from './partials/Input';

class IngredientList extends Component {
  constructor() {
    super();
    // state
    this.state = {
      ingredientListData: null,
      ingredientListDataReceived: false,
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/inventory')
      .then((res) => {
        return res.json();
      }).then((jsonRes) => {
        //console.log(jsonRes.data.items);
        this.setState({
          ingredientListData: jsonRes.data.items,
          ingredientListDataReceived: true,
        })
      })
  }

  renderIngredientList() {
    //console.log(this.state.ingredientListDataReceived, this.state.ingredientListData);
    if (this.state.ingredientListDataReceived) {
      return this.state.ingredientListData.map((item) => {
        return <Ingredient ingredient={item} key={item.id} />
      });
    }// } else return <Loading />
  }

  render() {
    return (
      <div className="ingredientlist">
        <Input />
        {this.renderIngredientList()}
        <button>SUBMIT</button>
      </div>
    );
  };
}

export default IngredientList;
