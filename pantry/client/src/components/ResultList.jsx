import React,{ Component } from 'react';
import axios from 'axios';

class ResultList extends Component {
  constructor() {
    super();
    this.state= {
      resultData: null,
      resultDataReceived: false,
    }
    this.handleRecipeAdd = this.handleRecipeAdd.bind(this);
  }

  handleRecipeAdd(event){
    event.preventDefault();
    axios.post(`/results`, {
      name: this.state.resultData[event.target.id].name,
      img: this.state.resultData[event.target.id].img,
      url: this.state.resultData[event.target.id].url,
    })
  }

  componentDidMount(){
    fetch('/results')
      .then((res)=>{
      return res.json();
    }).then((jsonRes) => {
      this.setState({
        resultData: jsonRes.data.arr,
        resultDataReceived: true,
      });
      console.log(this.state.resultData);
    });
  }

  renderResults() {
    if(this.state.resultDataReceived){
      return this.state.resultData.map((result, i) => {
        return <div key={i} className="myrecipe">
          <a className="link" href={result.url} target="_blank"><h3>{result.name}</h3></a>
          <img className="image" src={result.img} />
          <button className="recipeButton" onClick={this.handleRecipeAdd} id={i}>{'\u2A2E'}</button>
        </div>
      });
    }
  }

  render() {
    return (
      <div className="resultList">
        {this.renderResults()}
      </div>
    );
  }
}

export default ResultList;
