import React, { Component } from 'react';
import './App.css';
// import axios from 'axios';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

import {Route, Redirect, Switch} from 'react-router-dom';
import Home from './components/Home';
import IngredientList from './components/IngredientList';
import RecipeList from './components/RecipeList';
import Recipes from './components/Recipes';
import ResultList from './components/ResultList'
class App extends Component {
  constructor(){
    super();
    this.state = {
      inputItemValue: '',
    }
    this.handleItemSubmit = this.handleItemSubmit.bind(this);
    this.handleItemChange = this.handleItemChange.bind(this);
  }

  handleItemChange(){

  }

  handleItemSubmit(){

  }

  render() {
    return (
      <div className="App">
        <Header />
          <main>
            <Switch>

              <Route path="/recipes/:id" component={Recipes} />
              <Route path= "/inventory" component={IngredientList} />
              <Route exact path="/" component={Home} />
              <Route exact path="/recipes" component={RecipeList} />
              <Route exact path="/results" component={ResultList} />


              <Redirect to="/" />
            </Switch>
          </main>
        <Footer />
      </div>
    );
  }
}

export default App;
