import React, { Component } from 'react';

class Ingredient extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.ingredient.id,
      isChecked: 'false',
      ingredient: null,
      ingredientDataRecieved: false,
    }
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleIngredientSubmit = this.handleIngredientSubmit.bind(this);
}

  componentDidMount(){
   fetch(`http://localhost:3000/inventory/${this.state.id}`)
    .then((res) => {
        return res.json();
      }).then((jsonRes) => {
        this.setState({
          ingredient: jsonRes.data.item.ingredient,
          ingredientDataRecieved: true,
        });
      });
  }

   handleCheckboxChange(e){
    console.log(e.target.value);
    if (e.target.value === 'false'){
      this.setState({
        isChecked: 'true',
      })
      console.log(this.state.isChecked);
    }
    if(e.target.value === 'true') {
      this.setState({
        isChecked: 'false',
      })
      console.log(this.state.isChecked);
    }
  }

  handleIngredientSubmit(e){
    e.preventDefault();
    // console.log(this.id);
  }

  handleIngredientEdit(event){
    event.preventDefault();

    fetch(`http://localhost:3000/inventory/${this.state.id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        ingredient: event.target.content.value,
        author: event.target.author.value,
        genre_id: event.target.genre_type.value
      }),
    })
    .then((response) => {
      if (response.status === 200) {
        this.fetchAllQuotes();
      }
    })
  }

  renderIngredient() {
    if (this.state.ingredientDataRecieved) {
      return (
        <div>
          <form onSubmit={this.handleIngredientSubmit} className="ingredient">
            <input id={this.state.id} className="checkbox" type="checkbox" onChange={this.handleCheckboxChange} value={this.state.isChecked}/>
            <h3 className='item'>{this.state.ingredient} --- {this.state.isChecked}</h3>
            <div id="ingredientButtonContainer">
              <button className="ingredientButton" id="itemEdit">{'\uD83D\uDD8A'}</button>
              <button className="ingredientButton" onClick={()=>{this.props.handleItemDelete(this.state.id)}} id="itemDelete">{'\uD83D\uDDD1'}</button>
            </div>
          </form>
        </div>
      );
    }
  }


  render() {
    return (
      <div>
        {this.renderIngredient()}
      </div>
    );
  };
}

export default Ingredient;
