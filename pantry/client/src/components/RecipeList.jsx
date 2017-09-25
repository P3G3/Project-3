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
  }

  componentDidMount() {

    fetch('http://localhost:3000/recipes')
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

  renderRecipeList() {
    // console.log(this.state.recipeListDataReceived, this.state.recipeListData);
    if (this.state.recipeListDataReceived) {
      return this.state.recipeListData.map((recipe) => {
        return <Recipes recipe={recipe} key={recipe.id} />
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
