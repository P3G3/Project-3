import React, { Component } from 'react';
import Recipes from './Recipes';

class RecipeList extends Component {
  constructor() {
    super();
    // state
    this.state = {
      recipeListData: null,
      recipeListDataReceived: false,
    }
    this.handleRecipeDelete = this.handleRecipeDelete.bind(this);
  }

  componentDidMount() {

    fetch('/recipes')
      .then((res) => {
        return res.json();
      }).then((jsonRes) => {
       //console.log(jsonRes.data.recipes);
        this.setState({
          recipeListData: jsonRes.data.recipes,
          recipeListDataReceived: true,
        })
      })
  }

  handleRecipeDelete(id){
    fetch(`/recipes/${id}`, {
      method: 'DELETE',
    })
    .then((response) => {
      if (response.status === 200) {
        fetch('/recipes')
      .then((res) => {
        return res.json();
      }).then((jsonRes) => {
        this.setState((prevState) => { return {
          recipeListData: jsonRes.data.recipes,
        }
      });
    });
  }
});
}

  renderRecipeList() {
    // console.log(this.state.recipeListDataReceived, this.state.recipeListData);
    if (this.state.recipeListDataReceived) {
      return this.state.recipeListData.map((recipe) => {
        return <Recipes handleRecipeDelete={this.handleRecipeDelete} recipe={recipe} key={recipe.id} />
      });
    }
  }

  render() {
    return (
      <div className="recipeList">
        {this.renderRecipeList()}
      </div>
    );
  };
}

export default RecipeList;
