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
        <div className="ingredient">
          <input id="checkbox" type="checkbox" />
          <h3 className='item'>{this.state.ingredient}</h3>
          <div id="ingredientButtonContainer">
            <button className="ingredientButton">{'\uD83D\uDD8A'}</button>
            <button className="ingredientButton">{'\uD83D\uDDD1'}</button>
          </div>
        </div>
      );
    }
  }


  render() {
    return (
      <div>
        {this.renderIngredient()}
      </div>
    );
  };
}

export default Ingredient;
