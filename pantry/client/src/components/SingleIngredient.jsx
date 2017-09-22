import React, { Component } from 'react';

class SingleIngredient extends Component {
  constructor(props){
    super(props);
    this.id = this.props.match.params.id;
    this.state = {
      ingredient: null,
      ingredientDataRecieved: false,
    }

  }
  componentDidMount(){
   fetch(`http://localhost:3000/inventory/${this.id}`)
    .then((res) => {
        console.log(res);
        return res.json();
      }).then((jsonRes) => {
        this.setState({
          ingredient: jsonRes.ingredient,
          ingredientDataRecieved: true,
        });
      });
  }

  renderIngredient() {
    if (this.state.ingredientDataRecieved) {
      return (
        <div className="ingredient">
          <h3>{this.state.item.ingredient}</h3>
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

export default SingleIngredient;
