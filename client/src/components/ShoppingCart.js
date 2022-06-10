import React from "react";

class ShoppingCart extends React.Component {
  render() {
    return (
      <section className="shopping-cart">
        <button>
          <span className="chevron left"></span>
          <span>&nbsp;Order More Items</span>
        </button>
        {this.props.cartList}
        <div className="total-price-container">
          Total Price: $
          <span className="total-price">{this.props.totalPrice}</span>
        </div>
        <div className="purchase-button-container">
          <button>Confirm Payment</button>
        </div>
      </section>
    );
  }
}

export default ShoppingCart;
