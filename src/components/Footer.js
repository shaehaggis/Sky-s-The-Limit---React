import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="running-container">
          <div className="running-quantity"></div>
          <div className="running-price"></div>
        </div>
        <button className="view-cart-button">View Cart</button>
      </footer>
    );
  }
}

export default Footer;
