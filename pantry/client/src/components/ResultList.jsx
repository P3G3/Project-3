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
    fetch('http://localhost:3001/results')
      .then((req, res)=>{
      console.log(req);
      console.log(res);
      this.setState({
        resultData: res.data.recipes
      })
    })
  }
  // renderResult() {
  //   return this.state.resultData.map((results)=>{
  //     return <Results result={results} key={results.id} />
  //   });
  // }

  render() {
    return (
      <div className="resultList">

      </div>
    );
  }
}

export default ResultList;
