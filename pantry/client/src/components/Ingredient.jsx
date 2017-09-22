import React, { Component } from 'react';

class Ingredient extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.ingredient.id,
      ingredient: null,
      ingredientDataRecieved: false,
    }

  }
  componentDidMount(){
   fetch(`http://localhost:3000/inventory/${this.state.id}`)
    .then((res) => {
        return res.json();
      }).then((jsonRes) => {
        this.setState({
          ingredient: jsonRes.data.item.ingredient,
          ingredientDataRecieved: true,
        });
      });
  }

  renderIngredient() {
    if (this.state.ingredientDataRecieved) {
      return (
        <div>
          <h3>{this.state.ingredient}</h3>
        </div>
      );
    }
  }


  render() {
    return (
      <div className="ingredient">
        {this.renderIngredient()}
      </div>
    );
  };
}

export default Ingredient;
