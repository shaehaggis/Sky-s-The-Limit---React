import React from "react";

class FoodDrinkNav extends React.Component {
  state = {
    foodBG: "black",
    drinkBG: "white",
    foodColour: "white",
    drinkColour: "#c0c0c0",
  };

  onFoodClick = () => {
    if (this.state.foodBG !== "black") {
      this.setState({
        foodBG: "black",
        drinkBG: "white",
        foodColour: "white",
        drinkColour: "#c0c0c0",
      });
      this.props.foodClick();
    }
  };

  onDrinkClick = () => {
    if (this.state.drinkBG !== "black") {
      this.setState({
        foodBG: "white",
        drinkBG: "black",
        foodColour: "#c0c0c0",
        drinkColour: "white",
      });
      this.props.drinkClick();
    }
  };

  render() {
    return (
      <div className="category-nav">
        <button
          style={{
            backgroundColor: this.state.foodBG,
            color: this.state.foodColour,
          }}
          onClick={this.onFoodClick}
          className="food-button"
        >
          Food
        </button>
        <button
          style={{
            backgroundColor: this.state.drinkBG,
            color: this.state.drinkColour,
          }}
          onClick={this.onDrinkClick}
          className="drink-button"
        >
          Drink
        </button>
      </div>
    );
  }
}

export default FoodDrinkNav;
