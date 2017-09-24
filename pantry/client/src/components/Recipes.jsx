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
    fetch(`http://localhost:3000/recipes/${this.state.id}`)
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
        <h3>{this.state.name}</h3>
        <img src={this.state.img} />
        <a href={this.state.url} target="_blank">See Recipe</a>
        </div>
      );
  };
}

export default Recipes;
