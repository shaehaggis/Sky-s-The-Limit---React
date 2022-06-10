import React from "react";

class QuantityCounter extends React.Component {
  state = { quantity: 1, decStyle: "#c0c0c0", incStyle: "black" };

  onDecrementClick = () => {
    const currentQuantity = this.state.quantity;
    if (currentQuantity > 1) {
      this.setState({ quantity: currentQuantity - 1 });

      //   Change colour of buttons
      if (this.state.quantity === 2) {
        this.setState({ decStyle: "#c0c0c0" });
      }
      if (this.state.quantity === 9) {
        this.setState({ incStyle: "black" });
      }
    }
  };

  onIncrementClick = () => {
    const currentQuantity = this.state.quantity;
    if (currentQuantity < 9) {
      this.setState({ quantity: currentQuantity + 1 });
      //change colour of buttons
      if (this.state.quantity === 8) {
        this.setState({ incStyle: "#c0c0c0" });
      }
      if (this.state.quantity === 1) {
        this.setState({ decStyle: "black" });
      }
    }
  };

  render() {
    return (
      <div className="quantity-counter">
        <button
          style={{ color: this.state.decStyle }}
          onClick={this.onDecrementClick}
          className="decrement"
        >
          -
        </button>
        <div className="quantity">{this.state.quantity}</div>
        <button
          style={{ color: this.state.incStyle }}
          onClick={this.onIncrementClick}
          className="increment"
        >
          +
        </button>
      </div>
    );
  }
}

export default QuantityCounter;
