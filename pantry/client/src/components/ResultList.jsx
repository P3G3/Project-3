import React,{ Component } from 'react';
import Results from './Results';

class ResultList extends Component {
  constructor() {
    super();
    this.state= {
      resultData: null,
    }
  }
  componentDidMount(){
    fetch('http://localhost:3000/results')
      .then((res)=>{
      this.setState({
        resultData: res.data.recipes
      })
    })
  }
  renderResult() {
    return this.state.resultData.map((results)=>{
      return <Results result={results} key={results.id} />
    });
  }

  render() {
    return (
      <div className="resultList">
      {this.renderResult()}
      </div>
    );
  }
}

export default ResultList;
