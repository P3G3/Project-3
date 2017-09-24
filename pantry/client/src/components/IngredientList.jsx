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
      searchIngredients: [],
    }
    this.handleItemDelete = this.handleItemDelete.bind(this);
    this.renderIngredientList = this.renderIngredientList.bind(this);
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

  handleItemDelete(quoteId){
    fetch(`http://localhost:3001/inventory/${quoteId}`, {
      method: 'DELETE',
    })
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        fetch('http://localhost:3000/inventory')
      .then((res) => {
        return res.json();
      }).then((jsonRes) => {
        this.setState((prevState) => { return {
          ingredientListData: jsonRes.data.items,
        }
      });
    });
  }
});
}

  renderIngredientList() {
    //console.log(this.state.ingredientListDataReceived, this.state.ingredientListData);
    if (this.state.ingredientListDataReceived) {
      return this.state.ingredientListData.map((item) => {
        return <Ingredient handleItemDelete={this.handleItemDelete} ingredient={item} key={item.id} />
      });
    }// } else return <Loading />
  }

  render() {
    return (
      <div className="ingredientlist">
        <Input />
        {this.renderIngredientList()}
        <button>Find Recipes</button>
      </div>
    );
  };
}

export default IngredientList;
