import React,{ Component } from 'react';

class ResultList extends Component {
  constructor() {
    super();
    this.state= {
      resultData: null,
      resultDataReceived: false,
    }
  }

  componentDidMount(){
    fetch('http://localhost:3001/results')
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
      return this.state.resultData.map((result) => {
        return <div className="my-recipe">
          <h3>{result.name}</h3>
          <img src={result.img} />
          <a href={result.url} target="_blank">See Recipe</a>
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
