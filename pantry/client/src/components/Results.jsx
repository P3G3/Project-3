import React, { Component } from 'react';

class Results extends Component {
  constructor () {
    super();

    this.state ={
      id: this.props.recipes.recipe_id,
      name: null,
      img: null,
      url: null,
    }
  }

  componentDidMount() {
   fetch(`http://localhost:3001/results`)
    .then((res) => {
      return res.json();
    }).then((jsonRes) => {
      this.setState({
        name: jsonRes.data.recipes.title,
        img: jsonRes.data.recipes.image_url,
        url: jsonRes.data.recipes.source_url,
      })
    })
  }
  renderResult() {
    return (
      <div className="my-recipe">
    <h3>{this.state.name}</h3>
    <img src={this.state.img} />
    <a href={this.state.url}>{this.state.name}</a>
    </div>
    );
  };
}

export default Results;
