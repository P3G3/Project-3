import React, { Component } from 'react';
import './App.css';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

import {Route, Redirect, Switch} from 'react-router-dom';
import Home from './components/Home';
import IngredientList from './components/IngredientList';
import Recipes from './components/Recipes';
import RecipeList from './components/RecipeList';
import ResultList from './components/ResultList'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
          <main id="background">
            <Switch>

              <Route path="/recipes/:id" component={Recipes} />
              <Route path= "/inventory" component={IngredientList} />
              <Route exact path="/" component={Home} />
              <Route exact path="/recipes" component={RecipeList} />
              <Route path="/results" component={ResultList} />


              <Redirect to="/" />
            </Switch>
          </main>
        <Footer />
      </div>
    );
  }
}

export default App;
