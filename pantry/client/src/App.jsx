import React, { Component } from 'react';
import './App.css';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

import {Route, Redirect, Switch} from 'react-router-dom';
import Home from './components/Home';
import IngredientList from './components/IngredientList';
import SavedRecipes from './components/SavedRecipe';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <IngredientList />
          <main>
            <Switch>
              <Route path= "/inventory" component= {IngredientList} />
              <Route exact path="/" component={Home} />
              <Route exact path="/savedrecipes" component={SavedRecipes} />


              <Redirect to="/" />
            </Switch>
          </main>
        <Footer />
      </div>
    );
  }
}

export default App;
