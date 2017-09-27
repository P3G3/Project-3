import React, { Component } from 'react';
import Ingredient from './Ingredient';
import Input from './partials/Input';
import axios from 'axios';
import {Link} from 'react-router-dom';

class IngredientList extends Component {
  constructor() {
    super();
    // state
    this.state = {
      ingredientListData: null,
      ingredientListDataReceived: false,
      inputItemValue: '',
      searchIngredients: [],
    }
    this.handleItemSubmit = this.handleItemSubmit.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    this.renderIngredientList = this.renderIngredientList.bind(this);
    this.handleInputItemChange = this.handleInputItemChange.bind(this);
    this.handleSearchAdd = this.handleSearchAdd.bind(this);
  }

  componentDidMount() {
    fetch('/inventory')
      .then((res) => {
        return res.json();
      }).then((jsonRes) => {
        this.setState({
          ingredientListData: jsonRes.data.items,
          ingredientListDataReceived: true,
        })
      })
  }

  handleItemSubmit(e){
    e.preventDefault();
    axios.post(`/inventory`, {
      ingredient: this.state.inputItemValue
    })
    .then((response) => {
      if (response.status === 200) {
        fetch('/inventory')
      .then((res) => {
        return res.json();
      }).then((jsonRes) => {
        this.setState((prevState) => { return {
          ingredientListData: jsonRes.data.items,
        }
      });
    });
  }
});
}

  handleInputItemChange(event) {
    console.log(event.target.value);
    this.setState({
      inputItemValue: event.target.value
    });
  }

  handleSearchAdd(ingredient){
    this.setState((prevState) => {
      return {
      searchIngredients: prevState.searchIngredients.concat(ingredient),
    }}
  )}

  handleItemDelete(id){
    fetch(`/inventory/${id}`, {
      method: 'DELETE',
    })
    .then((response) => {
      if (response.status === 200) {
        fetch('/inventory')
      .then((res) => {
        return res.json();
      }).then((jsonRes) => {
        this.setState((prevState) => { return {
          ingredientListData: jsonRes.data.items,
        }
      });
    });
  }
});
}

  renderIngredientList() {
    //console.log(this.state.ingredientListDataReceived, this.state.ingredientListData);
    if (this.state.ingredientListDataReceived) {
      return this.state.ingredientListData.map((item) => {
        return <Ingredient handleSearchAdd={this.handleSearchAdd} handleItemDelete={this.handleItemDelete} ingredient={item} key={item.id} />
      });
    }// } else return <Loading />
  }

  render() {
    return (
        <div id="background">
        <Input handleInputItemChange={this.handleInputItemChange} handleItemSubmit={this.handleItemSubmit} inputItemValue={this.state.inputItemValue}/>
          <div className="ingredientlist">
            {this.renderIngredientList()}
          </div>
          <button id="findResults"><Link className='link' to={`/results/?q=${this.state.searchIngredients}`}>Find Recipes</Link></button>
        </div>
    );
  };
}

export default IngredientList;
