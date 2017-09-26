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
}

  componentDidMount(){
   fetch(`/inventory/${this.state.id}`)
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

  renderIngredient() {
    if (this.state.ingredientDataRecieved) {
      return (
          <form onSubmit={this.handleIngredientSubmit} className="ingredients">
            <input id={this.state.id} className="checkbox" type="checkbox" onChange={this.handleCheckboxChange} onClick={() => {this.props.handleSearchAdd(this.state.ingredient)}} value={this.state.isChecked}/>
            <div className='item'>{this.state.ingredient}</div>
            <button className="ingredientButton" onClick={()=>{this.props.handleItemDelete(this.state.id)}} id="itemDelete">{'\uD83D\uDDD1'}</button>
          </form>
      );
    }
  }


  render() {
    return (
      <div className='itemHolder'>
        {this.renderIngredient()}
      </div>
    );
  };
}

export default Ingredient;
