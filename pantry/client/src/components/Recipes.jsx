import React, { Component } from 'react';

class Recipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.recipe.id,
      url: null,
      img: null,
      name: null,
    }
  }

  componentDidMount() {
    fetch(`/recipes/${this.state.id}`)
      .then((res) => {
        return res.json();
      }).then((jsonRes) => {
        this.setState({
          name: jsonRes.data.recipe.name,
          img: jsonRes.data.recipe.img,
          url: jsonRes.data.recipe.url,
        })
      })
  }
  render() {
    return (
      <div className="my-recipe">
        <a href={this.state.url} target="_blank"><h3>{this.state.name}</h3></a>
        <img src={this.state.img} />
        <button className="ingredientButton" onClick={()=>{this.props.handleRecipeDelete(this.state.id)}}>{'\uD83D\uDDD1'}</button>
        </div>
      );
  };
}

export default Recipes;
