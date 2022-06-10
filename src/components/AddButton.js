import React from "react";

class AddButton extends React.Component {
  state = { isSoftDrink: this.props.isSoftDrink };

  onButtonClick = () => {
    if (this.state.isSoftDrink === "true") {
      //ADD to shopping cart menu item
      //ADD to footer shopping cart
    } else {
      //Open form
    }
  };

  render() {
    return (
      <button onClick={this.onButtonClick} className="add-to-cart-button">
        Add
      </button>
    );
  }
}

export default AddButton;
