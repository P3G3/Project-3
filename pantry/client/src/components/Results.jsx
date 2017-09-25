import React, { Component } from 'react';

class Results extends Component {
  constructor (props) {
    super(props);

    this.state ={
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
        name: jsonRes.data.arr.name,
        img: jsonRes.data.arr.image,
        url: jsonRes.data.arr.url,
      })
    })
  }

  render() {
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
